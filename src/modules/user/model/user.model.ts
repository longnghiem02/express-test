import { Column, Entity, Index } from "typeorm";
import { AbstractEntity } from "../../../libs/common/abstract-base.model";

@Entity({ name: "users" })
export class User extends AbstractEntity {
  @Column({
    nullable: false
  })
  name: string;

  @Index()
  @Column({
    nullable: false
  })
  username: string;

  @Index()
  @Column({
    nullable: false
  })
  password: string;

  @Index()
  @Column({
    nullable: false
  })
  role: string;
}
