import { useState } from "react";
import { TaskFormHeaderComponent } from "./taskFormHeader";

export type TaskFormState = {
  authorName: string;
  content: string;
};

const initialFormState: TaskFormState = {
  authorName: "",
  content: "",
};

export const TaskFormComponent = ({
  onSubmitForm,
  onCloseOverlay,
}: {
  onSubmitForm: (form: TaskFormState) => void;
  onCloseOverlay: () => void;
}) => {
  const [form, setForm] = useState<TaskFormState>(initialFormState);

  const handleForm = (e: { target: { value: string; name: string } }) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    onSubmitForm(form);
    setForm(initialFormState);
    onCloseOverlay();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-96 border-2 absolute bg-slate-100 rounded-md shadow-xl p-4 grid grid-cols-1 gap-3"
    >
      <TaskFormHeaderComponent
        closeOverlay={onCloseOverlay}
      ></TaskFormHeaderComponent>
      <div>
        <label className="font-mono text-base font-semibold text-gray-600">
          Author's Name
        </label>
        <input
          type="text"
          name="authorName"
          className="mt-2 outline-none pl-2 rounded-md h-10 border-2 border-solid border-slate-600 hover:border-slate-400 focus:border-slate-400 w-full"
          placeholder="Author"
          value={form.authorName}
          onChange={handleForm}
          autoFocus={true}
        />
      </div>
      <div>
        <label className="font-mono text-base font-semibold text-gray-600">
          Task To Do
        </label>
        <textarea
          name="content"
          className="p-2 mt-2 w-full outline-none border-2 border-solid rounded-md resize-none h-40 border-slate-600 hover:border-slate-400 focus:border-slate-400"
          placeholder="Do Homework!"
          value={form.content}
          onChange={handleForm}
        ></textarea>
      </div>
      <button className="px-4 py-2 bg-blue-600 rounded-lg text-white font-semibold text-lg border-2 border-transparent hover:bg-blue-700  active:bg-blue-700 duration-150">
        Create!
      </button>
    </form>
  );
};
