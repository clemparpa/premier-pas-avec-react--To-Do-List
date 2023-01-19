import { removeTasksByStatus } from "../../store/tasks.service";
import { NOT_STARTED_STATUS, Task, TaskStatus } from "../../utils/task.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { showOverlay } from "../../store/overlay.service";

export type TaskListHeaderProps = {
  tasks: Array<Task>;
  status: TaskStatus;
};

export const TaskListHeaderComponent = ({
  tasks,
  status,
}: TaskListHeaderProps) => {
  return (
    <div className="flex items-center rounded-t-lg justify-between bg-slate-900 px-3 py-2">
      <div className="flex items-center justify-start">
        <h2 className="cursor-default text-gray-50 text-mono text-semibold text-xl">
          {status}
        </h2>
        {status === NOT_STARTED_STATUS && (
          <FontAwesomeIcon
            onClick={showOverlay}
            icon={faAdd}
            className="ml-4 text-white text-lg hover:rotate-90 duration-150 hover:text-blue-500"
          ></FontAwesomeIcon>
        )}
      </div>
      <div className="flex items-center justify-center">
        <button
          type="button"
          className="text-blue-400 font-semibold mr-4 hover:underline"
          onClick={() => removeTasksByStatus(status)}
        >
          Clear All
        </button>
        <div
          className="cursor-default bg-slate-500 rounded-full 
          w-6 h-6 flex items-center justify-center text-base font-bold 
          text-gray-200"
        >
          {tasks.length}
        </div>
      </div>
    </div>
  );
};
