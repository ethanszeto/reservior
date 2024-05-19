import { config as dotenvConfig } from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default class UserController {
  static createAccount(req, res) {
    res.json("in");
  }
}
