import { v4 as uuid } from "uuid";

export const NOT_STARTED_STATUS = "Not Started";
export const IN_PROGRESS_STATUS = "In Progress";
export const DONE_STATUS = "Done";

export type TaskStatus =
  | typeof NOT_STARTED_STATUS
  | typeof IN_PROGRESS_STATUS
  | typeof DONE_STATUS;

export type Task = {
  status: TaskStatus;
  content: string;
  authorName: string;
  id: string;
  date: Date;
};

export const createTask = (
  authorName: string,
  content: string,
  status: TaskStatus
): Task => {
  return {
    authorName,
    content,
    status,
    date: new Date(),
    id: uuid(),
  };
};
