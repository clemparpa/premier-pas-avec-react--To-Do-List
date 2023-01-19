import { useCallback } from "react";
import { hideOverlay, useShowOverlay } from "../../store/overlay.service";
import { addTask } from "../../store/tasks.service";
import { createTask } from "../../utils/task.utils";
import { TaskFormComponent, TaskFormState } from "./taskForm";

export const TaskFormOverlay = ({ show }: { show: boolean }) => {
  const submitForm = useCallback(
    (taskForm: TaskFormState) =>
      addTask(createTask(taskForm.authorName, taskForm.content, "Not Started")),
    []
  );

  return show ? (
    <div className="fixed flex items-center justify-center z-10 w-full h-full top-0 left-0 right-0 bottom-0 bg-slate-800/80">
      <TaskFormComponent
        onCloseOverlay={hideOverlay}
        onSubmitForm={submitForm}
      ></TaskFormComponent>
    </div>
  ) : null;
};
