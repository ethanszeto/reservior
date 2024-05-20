import { UserCreate, UserResponse } from "../models/api_models/user.js";
import UserAccessor from "../db_accessors/user.js";
import { config as dotenvConfig } from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ErrorInternalAPIModelValidation } from "../errors/internal_error.js";
import { ErrorValidation } from "../errors/http_error.js";

export default class UserController {
  static async createAccount(req, res) {
    try {
      const userCreate = new UserCreate(req.body);
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
}
