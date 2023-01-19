import { useCallback } from "react";
import { useTasks } from "../../store/tasks.service";
import { TaskStatus } from "../../utils/task.utils";
import { TaskBlockComponent } from "../task/task";
import { TaskListHeaderComponent } from "../taskListHeader/taskListHeader";
import "./taskList.css";

export type TaskListProps = {
  status: TaskStatus;
};

export const TaskListComponent = ({ status }: TaskListProps) => {
  const tasks = useTasks(status);

  return (
    <div className="rounded-lg w-[360px]">
      <TaskListHeaderComponent
        tasks={tasks}
        status={status}
      ></TaskListHeaderComponent>
      <div className="flex items-center justify-start flex-col p-4 bg-slate-700 rounded-b-lg h-[540px] overflow-auto task-scrollbar">
        {tasks.map((task) => (
          <div key={task.id} className="mt-4">
            <TaskBlockComponent task={task}></TaskBlockComponent>
          </div>
        ))}
      </div>
    </div>
  );
};
