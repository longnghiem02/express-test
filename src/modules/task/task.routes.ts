import express from "express";
import dtoValidationMiddleware from "../../libs/middleware/dto.validate";
import {
  AssignTaskDTO,
  CreateTaskDTO,
  ChangeStateTaskDTO,
  DeleteTaskDTO
} from "./task.dto";
import { TaskController } from "./task.controller";

const taskController = new TaskController();
export const taskRouter = express.Router();

taskRouter.post(
  "/api/create-task",
  dtoValidationMiddleware(CreateTaskDTO),
  taskController.createTask
);

taskRouter.put(
  "/api/assign-task",
  dtoValidationMiddleware(AssignTaskDTO),
  taskController.assignTask
);

taskRouter.put(
  "/api/change-state-task",
  dtoValidationMiddleware(ChangeStateTaskDTO),
  taskController.changeStateTask
);

taskRouter.delete(
  "/api/delete-task",
  dtoValidationMiddleware(DeleteTaskDTO),
  taskController.deleteTask
);
