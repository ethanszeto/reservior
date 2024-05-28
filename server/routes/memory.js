import express from "express";
import bodyParser from "body-parser";
import Authorize from "../auth/authorization.js";
import MemoryController from "../controllers/memory_controller.js";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

router.route("/add").post(Authorize.auth, MemoryController.createMemory);
router.route("/me").post(Authorize.auth, MemoryController.createMemory);
router.route("/me/:location").post(Authorize.auth, MemoryController.createMemory);
