import { dataSource } from "../../database";
import { TypeORMRepository } from "../../libs/common/typeorm-repository";
import { Log } from "./model/log.model";

export class LogRepository extends TypeORMRepository<Log> {
  constructor() {
    super(Log, dataSource.manager);
  }
}