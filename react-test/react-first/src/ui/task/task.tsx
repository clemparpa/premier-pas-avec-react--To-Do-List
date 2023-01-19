import { Task } from "../../utils/task.utils";
import "./task.css";
import { removeTask, updateTaskStatus } from "../../store/tasks.service";
import { useCallback } from "react";
import { TaskBlockHeaderComponent } from "./taskHeader";
import { TaskBlockContentComponent } from "./taskContent";
import { TaskBlockFooterComponent } from "./taskFooter";

export type TaskBlockProps = {
  task: Task;
};

export const TaskBlockComponent = ({ task }: TaskBlockProps) => {
  const onRemoveTask = useCallback(() => removeTask(task.id), [task]);
  const onUpdateTaskStatus = useCallback(
    () => updateTaskStatus(task.id),
    [task]
  );

  return (
    <div className="w-80 max-h-52 rounded-md bg-slate-900 p-4 shadow-md grid grid-cols-12 gap-3">
      <TaskBlockHeaderComponent
        authorName={task.authorName}
        onRemoveTask={onRemoveTask}
      ></TaskBlockHeaderComponent>
      <TaskBlockContentComponent
        content={task.content}
      ></TaskBlockContentComponent>
      <TaskBlockFooterComponent
        onUpdateStatus={onUpdateTaskStatus}
        date={task.date}
        status={task.status}
      ></TaskBlockFooterComponent>
    </div>
  );
};
