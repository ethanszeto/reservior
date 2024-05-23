import express from "express";
import bodyParser from "body-parser";
import Authorize from "../auth/authorization.js";
import LocationController from "../controllers/location_controller.js";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

router.route("/add").post(Authorize.auth, LocationController.createLocation);
router.route("/me").get(Authorize.auth, LocationController.getAllLocationsMe);
router.route("/me/:type").get(Authorize.auth, LocationController.getAllLocationsMeByType);

export default router;
