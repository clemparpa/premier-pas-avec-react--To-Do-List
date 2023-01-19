import { TaskStatus } from "../../utils/task.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const statusMessage = (status: TaskStatus): string => {
  if (status === "Not Started") return "Start!";
  if (status === "In Progress") return "Done!";
  return "";
};

export const TaskBlockFooterComponent = ({
  status,
  date,
  onUpdateStatus,
}: {
  status: TaskStatus;
  date: Date;
  onUpdateStatus: () => void;
}) => {
  return (
    <div className="flex items-center justify-between col-span-12 mt-2">
      {status !== "Done" ? (
        <div
          className="text-gray-200 hover:text-green-400"
          onClick={onUpdateStatus}
        >
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-xl "
          ></FontAwesomeIcon>
          <span className=" text-lg font-mono pl-2">
            {statusMessage(status)}
          </span>
        </div>
      ) : null}
      <span className="text-md text-slate-400 font-normal">
        {date.toDateString()}
      </span>
    </div>
  );
};
