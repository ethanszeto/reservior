import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import defaultRouter from "./routes/default.js";
import userRouter from "./routes/user.js";
import peopleRouter from "./routes/people.js";

/**
 * This file controls the express server and
 * lets the server use everything it needs to
 * in order to function.
 */
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/", defaultRouter);
app.use("/user", userRouter);
app.use("/people", peopleRouter);

export default app;
