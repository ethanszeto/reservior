import express from "express";
import bodyParser from "body-parser";
import UserController from "../controllers/user_controller.js";
import Authorize from "../auth/authorization.js";

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ErrorInvalidToken, ErrorNotLoggedIn } from "../errors/http_error.js";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

router.route("/create-account").post(UserController.createAccount);
router.route("/login").post(UserController.login);
router.route("/me").get(Authorize.auth, UserController.getUserMe);

export default router;
