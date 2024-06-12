import express from "express";
import bodyParser from "body-parser";
import Authorize from "../auth/authorization.js";
import MemoryController from "../controllers/memory_controller.js";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

router.route("/add").post(Authorize.auth, MemoryController.createMemory);
router.route("/me").get(Authorize.auth, MemoryController.getMemoriesMe);
router.route("/me/update/:memoryId").patch(Authorize.auth, MemoryController.updateMemoryById);
router.route("/me/:locationId").get(Authorize.auth, MemoryController.getMemoriesMeByLocationId);
router.route("/me/:peopleId").get(Authorize.auth, MemoryController.getMemoriesMeByPerson);
router.route("/me/facts/:personId").get(Authorize.auth, MemoryController.getFactsByPerson);
router.route("/me/anecdotes/:personId").get(Authorize.auth, MemoryController.getAnecdotesByPerson);

export default router;
