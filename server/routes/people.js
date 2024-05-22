import express from "express";
import bodyParser from "body-parser";
import Authorize from "../auth/authorization.js";
import PeopleController from "../controllers/people_controller.js";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

router.route("/add").post(Authorize.auth, PeopleController.createPerson);
router.route("/me").get(Authorize.auth, PeopleController.getPeopleMe);

export default router;
