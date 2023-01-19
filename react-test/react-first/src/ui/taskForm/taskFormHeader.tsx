import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const TaskFormHeaderComponent = ({
  closeOverlay,
}: {
  closeOverlay: () => void;
}): JSX.Element => {
  return (
    <div className="pb-4 flex items-center justify-between">
      <h2 className="font-mono text-lg font-semibold text-gray-700">
        Create A New Task To Do
      </h2>
      <FontAwesomeIcon
        icon={faXmark}
        className="text-gray-700 hover:text-gray-800 active:text-gray-800 text-lg hover:text-xl active:text-xl"
        onClick={closeOverlay}
      />
    </div>
  );
};
