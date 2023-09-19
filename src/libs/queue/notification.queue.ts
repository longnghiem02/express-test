import { Job } from "bull";
import initQueue from ".";
import { NotificationType } from "../../modules/log/log.types";
import { LogService } from "../../modules/log/log.services";

const logService = new LogService()

export const sendNotification = async (notification: NotificationType) => {
  const notificationQueue = initQueue("notification");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  await notificationQueue.add(notification);

  const processNotificationQueue = async (job: Job) => {
    const createLog = await logService.handleCreateLog(job.data)
    console.log(createLog);
  };

  notificationQueue.process(processNotificationQueue);
};
