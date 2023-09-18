import { dataSource } from "../../database";
import { TypeORMRepository } from "../../libs/common/typeorm-repository";
import { Task } from "./model/task.model";

export class TaskRepository extends TypeORMRepository<Task> {
  constructor() {
    super(Task, dataSource.manager);
  }
}