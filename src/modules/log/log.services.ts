import { message } from "../../configs/constant";
import { HTTPResponse, responseData, responseError } from "../../libs/types/HTTPResponse.type";
import { LogRepository } from "./log.repository";
import { NotificationType } from "./log.types";

const logRepository = new LogRepository()

export class LogService {
  handleCreateLog = async (data: NotificationType): Promise<HTTPResponse> => {
    try {
      const response = await logRepository.save(data);
      if (!response) {
        return responseError(message.errServer);
      }
      return responseData(message.ok, response)
    } catch (error) {
      return responseError(error);
    }
  }
}