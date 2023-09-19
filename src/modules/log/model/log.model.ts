import { Column, Entity, Index } from "typeorm";
import { AbstractEntity } from "../../../libs/common/abstract-base.model";

@Entity({ name: "logs" })
export class Log extends AbstractEntity {
  @Index()
  @Column({
    nullable: false
  })
  member: string;

  @Index()
  @Column({
    nullable: false,
  })
  task: string;
}
