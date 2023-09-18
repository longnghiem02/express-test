export type createTaskData = {
  created_admin_id: number,
  detail: string,
  completed: boolean
}

export type createTaskCondition = {
  id: number,
}

export type assignTaskData = {
  assigned_member_id: number,
}

export type assignTaskCondition = {
  id: number,
}

export type changeStateTaskData = {
  completed: boolean,
}

export type changeStateTaskCondition = {
  id: number,
}

export type deleteTaskCondition = {
  id: number,
}