import { UserCreate, UserResponse, UserLogin } from "../models/api_models/user.js";
import UserAccessor from "../db_accessors/user.js";
//import { config as dotenvConfig } from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ErrorInternalAPIModelValidation } from "../errors/internal_error.js";
import { ErrorValidation, ErrorAlreadyLoggedIn, ErrorUserNotFound, ErrorInvalidLogin } from "../errors/http_error.js";

export default class UserController {
  static async createAccount(req, res) {
    try {
      const userCreate = new UserCreate(req.body);
      userCreate.password = await bcrypt.hash(userCreate.password, 10);
      const db_user = await UserAccessor.createUser(userCreate);
      const userResponse = new UserResponse(db_user.toObject());
      res.json(userResponse);
    } catch (e) {
      if (e instanceof ErrorInternalAPIModelValidation) {
        ErrorValidation.throwHttp(req, res, e.message);
      } else {
        throw e;
      }
    }
  }

  static async login(req, res) {
    try {
      const userLogin = new UserLogin(req.body);

      // Already has a cookie
      if (req.cookies.token) {
        return ErrorAlreadyLoggedIn.throwHttp(req, res);
      }

      const db_user = await UserAccessor.getUserByUsername(userLogin.username);

      // User does not exist
      if (!db_user) {
        return ErrorUserNotFound.throwHttp(req, res);
      }

      const result = await bcrypt.compare(userLogin.password, db_user.password);

      // Bad login credentials
      if (!result) {
        return ErrorInvalidLogin.throwHttp(req, res);
      }

      // Login Successful
      const token = jwt.sign(
        {
          username: userLogin.username,
        },
        process.env.SERVER_TOKEN_KEY
      );

      //Users are logged in for 1 hour
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
      });
      res.status(200).json({ message: "Login successful." });
    } catch (e) {
      if (e instanceof ErrorInternalAPIModelValidation) {
        ErrorValidation.throwHttp(req, res, e.message);
      } else {
        throw e;
      }
    }
  }
}
