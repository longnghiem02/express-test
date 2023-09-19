import { jwtKey } from "../../configs/constant";
import { jwtDecode } from "../../libs/jwt";
import { TaskService } from "./task.services";
import {
  assignTaskCondition,
  assignTaskData,
  changeStateTaskCondition,
  changeStateTaskData,
  createTaskData,
  deleteTaskCondition
} from "./task.types";

const taskService = new TaskService()

export class TaskController{

  createTask = async (req: any, res: any) => {
    const jwtDecoded = jwtDecode(req.body.jwt, jwtKey);
    const data: createTaskData = {
      created_admin_id: jwtDecoded.id,
      detail: req.body.detail,
      completed: req.body.completed
    };
    const result = await taskService.handleCreateTask(data);
    res.status(200).json(result);
  };

  assignTask = async (req: any, res: any) => {
    const condition: assignTaskCondition = {
      id: req.body.id
    };
    const data: assignTaskData = {
      assigned_member_id: req.body.assigned_member_id
    };
    const result = await taskService.handleAssignTask(condition, data);
    res.status(200).json(result);
  };

  changeStateTask = async (req: any, res: any) => {
    const condition: changeStateTaskCondition = {
      id: req.body.id
    };
    const data: changeStateTaskData = {
      completed: req.body.completed
    };
    const result = await taskService.handleChangeStateTask(condition, data);
    res.status(200).json(result);
  };

  deleteTask = async (req: any, res: any) => {
    const condition: deleteTaskCondition = {
      id: req.body.id
    };
    const result = await taskService.handleDeleteTask(condition);
    res.status(200).json(result);
  };
}
