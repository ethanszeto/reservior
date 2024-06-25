import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

/* Default Router */
router.route("/").get((req, res) => {
  res.json({ message: "Connected to the reservior API!" });
});

export default router;
