import { TaskRepository } from "./task.repository";
import {
  assignTaskCondition,
  assignTaskData,
  changeStateTaskCondition,
  changeStateTaskData,
  createTaskData,
  deleteTaskCondition
} from "./task.types";

const taskRepository = new TaskRepository()

export class TaskService {

  handleCreateTask = async (condition: any, data: createTaskData) => {
    const response = await taskRepository.save(data);
    if (!response) {
      return {
        errMessage: "error!"
      };
    }
    return response;
  };

  handleAssignTask = async (
    condition: assignTaskCondition,
    data: assignTaskData
  ) => {
    const response = await taskRepository.updateOrInsert(condition, data);
    if (!response) {
      return {
        errMessage: "error!"
      };
    }
    return response;
  };

  handleChangeStateTask = async (
    condition: changeStateTaskCondition,
    data: changeStateTaskData
  ) => {
    const response = await taskRepository.updateOrInsert(condition, data);
    if (!response) {
      return {
        errMessage: "error!"
      };
    }
    return response;
  };

  handleDeleteTask = async (condition: deleteTaskCondition) => {
    const response = await taskRepository.findAndDelete(condition);
    if (!response) {
      return {
        errMessage: "error!"
      };
    }
    return;
  };
}
