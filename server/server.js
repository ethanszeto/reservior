import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import defaultRouter from "./routes/default.js";
import userRouter from "./routes/user.js";
import peopleRouter from "./routes/people.js";
import locationRouter from "./routes/location.js";
import memoryRouter from "./routes/memory.js";
import serverLog from "./util/server_log.js";
import { set } from "./util/color_terminal.js";

/**
 * This file controls the express server and
 * lets the server use everything it needs to
 * in order to function.
 */
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/", defaultRouter);
app.use("/user", userRouter);
app.use("/people", peopleRouter);
app.use("/location", locationRouter);
app.use("/memory", memoryRouter);

export default app;
