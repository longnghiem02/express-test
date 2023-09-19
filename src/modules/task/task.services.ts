import { message } from "../../configs/constant";
import { sendNotification } from "../../libs/queue/notification.queue";
import {
  HTTPResponse,
  responseData,
  responseError,
  responseMessage,
  responseNotFound
} from "../../libs/types/HTTPResponse.type";
import { User } from "../user/model/user.model";
import { TaskRepository } from "./task.repository";
import {
  assignTaskCondition,
  assignTaskData,
  changeStateTaskCondition,
  changeStateTaskData,
  createTaskData,
  deleteTaskCondition
} from "./task.types";

const taskRepository = new TaskRepository();

export class TaskService {
  handleCreateTask = async (data: createTaskData): Promise<HTTPResponse> => {
    try {
      const response = await taskRepository.save(data);
      if (!response) {
        return responseError(message.errServer);
      }
      return responseData(message.ok, response)
    } catch (error) {
      return responseError(error);
    }
  };

  handleAssignTask = async (
    condition: assignTaskCondition,
    data: assignTaskData
  ): Promise<HTTPResponse> => {
    try {
      const response = await taskRepository.findOneBy(condition);
      const user = await User.findOne({
        where: {id: data.assigned_member_id}
      })
      let member: string
      if (user) {
        member = user.username
      } else {
        member = ""
      }
      if (!response) {
        return responseNotFound(message.notFound);
      } else {
        await taskRepository.save({
          ...response,
          ...data,
          updatedAt: new Date()
        });
        const taskName = response.name
        await sendNotification({
          member: member,
          task: taskName
        })
        return responseMessage(message.ok)
      }
    } catch (error) {
      return responseError(error);
    }
  };

  handleChangeStateTask = async (
    condition: changeStateTaskCondition,
    data: changeStateTaskData
  ): Promise<HTTPResponse> => {
    try {
      const response = await taskRepository.findOneBy(condition);
      if (!response) {
        return responseNotFound(message.notFound);
      } else {
        await taskRepository.save({
          ...response,
          ...data,
          updatedAt: new Date()
        });
        return responseData(message.ok, response)
      }
    } catch (error) {
      return responseError(error);
    }
  };

  handleDeleteTask = async (condition: deleteTaskCondition): Promise<HTTPResponse> => {
    try {
      const response = await taskRepository.findAndDelete(condition);
      if (!response) {
        return responseError(message.errServer);
      }
      return responseMessage(message.ok);
    } catch (error) {
      return responseError(error);
    }
  };
}
