import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ErrorInvalidToken, ErrorNotLoggedIn } from "../errors/http_error.js";

export default class Authorize {
  /**
   * Authenticates that the user who requested this endpoint is logged in.
   *
   * @param {HTTP Request} req
   * @param {HTTP Response} res
   * @param {function} next
   * @returns
   */
  static auth(req, res, next) {
    if (!req.cookies.token) {
      return ErrorNotLoggedIn.throwHttp(req, res);
    }

    try {
      jwt.verify(req.cookies.token, process.env.SERVER_TOKEN_KEY);
    } catch (e) {
      return ErrorInvalidToken.throwHttp(req, res);
    }

    next();
  }

  /**
   * Get the currently signed in user if signed in.
   *
   * @param {HTTP Request} req
   * @param {HTTP Response} res
   * @returns
   */
  static getCurrentUser(req, res) {
    if (!req.cookies.token) {
      return ErrorNotLoggedIn.throwHttp(req, res);
    }

    try {
      const payload = jwt.verify(req.cookies.token, process.env.SERVER_TOKEN_KEY);
      return payload.username;
    } catch (e) {
      return ErrorInvalidToken.throwHttp(req, res);
    }
  }
}
