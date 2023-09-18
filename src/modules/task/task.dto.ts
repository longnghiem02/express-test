import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTaskDTO {
  @IsNotEmpty()
  @IsString()
  detail: string;

  @IsNotEmpty()
  @IsBoolean()
  completed: boolean;
}

export class AssignTaskDTO {
  @IsNotEmpty()
  @IsNumber()
  assigned_member_id: number;
}

export class ChangeStateTaskDTO {
  @IsNotEmpty()
  @IsBoolean()
  completed: boolean;
}

export class DeleteTaskDTO {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}