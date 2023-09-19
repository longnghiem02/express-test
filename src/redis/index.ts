import { createClient } from "redis";
import Logger from "../libs/logger";

export const connectRedis = async () => {
  try {
    const client = createClient();
    client.on("error", (err) => console.log("Redis Client Error", err));
    await client.connect();
    if (client.isReady === true) {
      Logger.info("Redis is connected");
    } else {
      Logger.info("Redis is not connected");
    }
    await client.disconnect();
  } catch (error) {
    Logger.error("Could not connect to Redis: ", error);
  }
};
