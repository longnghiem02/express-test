import express, { Express } from "express";
import morgan from "morgan";
import { connectDb } from "./database";
import Logger from "./libs/logger";
import bodyParser from "body-parser";
import cors from "cors";
import { APP_CONFIG } from "./configs";
import loadQueueBoard from "./libs/queue/bull-board";
import { initScheduledJobs } from "./cron";
import { userRouter } from "./modules/user/user.routes";
import { taskRouter } from "./modules/task/task.routes";
import { checkRoute } from "./libs/middleware";
import { connectRedis } from "./redis";

connectDb();
connectRedis()

const app: Express = express();
const PORT: any = APP_CONFIG.PORT;

loadQueueBoard(app);
initScheduledJobs();

app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.all("*", checkRoute())
app.use(userRouter)
app.use(taskRouter)


app.listen(PORT, () => {
  Logger.info(`App running on port ` + PORT);
});
