import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const TaskBlockHeaderComponent = ({
  authorName,
  onRemoveTask,
}: {
  authorName: string;
  onRemoveTask: () => void;
}) => {
  return (
    <div className="flex items-center justify-between col-span-12">
      <h6 className="text-md text-slate-400 font-mono font-semibold">
        {authorName}
      </h6>
      <div className="col-span-3 flex items-center justify-end">
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="text-white text-base hover:text-gray-400"
          onClick={onRemoveTask}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};
