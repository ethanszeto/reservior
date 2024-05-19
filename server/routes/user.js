import express from "express";
import bodyParser from "body-parser";
import UserController from "../controllers/user_controller.js";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

router.route("/").get((req, res) => {
  res.json({ message: "success" });
});

/* Create Account Router */
router.route("/create-account").post(UserController.createAccount);

export default router;
