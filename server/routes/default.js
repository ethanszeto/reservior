import express from "express";
import bodyParser from "body-parser";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

/* Default Router */
router.route("/:data?").get((req, res) => {
  const { SERVER_HOSTNAME, SERVER_PORT } = process.env;
  res.json({ error: `http://${SERVER_HOSTNAME}:${SERVER_PORT}/${req.params.data ? req.params.data : ""} invalid API call.` });
});

export default router;
