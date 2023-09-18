import { Column, Entity, Index } from "typeorm";
import { AbstractEntity } from "../../../libs/common/abstract-base.model";

@Entity({ name: "tasks" })
export class Task extends AbstractEntity {
  @Column({
    nullable: false
  })
  created_admin_id: number;

  @Index()
  @Column({
    nullable: true
  })
  assigned_member_id: number;

  @Index()
  @Column({
    nullable: false
  })
  detail: string;

  @Index()
  @Column({
    nullable: false,
  })
  completed: boolean;
}
