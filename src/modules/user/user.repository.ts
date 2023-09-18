import { dataSource } from "../../database";
import { TypeORMRepository } from "../../libs/common/typeorm-repository";
import { User } from "./model/user.model";

export class UserRepository extends TypeORMRepository<User> {
  constructor() {
    super(User, dataSource.manager);
  }
}
