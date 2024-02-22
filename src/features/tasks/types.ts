import { ColorTypes } from "../common";
import { IUser } from "../users";

export interface ITaskStatus {
  id: "todo" | "doing" | "done";
  label: "To do" | "Doing" | "Done";
  icon: string;
  color: ColorTypes;
}

export interface ITask {
  id: string;
  title: string;
  description?: string;
  status: ITaskStatus;
  assignee?: IUser;
}

export interface ITaskForm {
  title: string;
  description?: string;
}
