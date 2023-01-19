import "./App.css";
import { useShowOverlay } from "./store/overlay.service";
import { TaskFormOverlay } from "./ui/taskForm/taskFormOverlay";
import { TaskListComponent } from "./ui/taskList/taskListComponent";

function App() {
  const showOverlay = useShowOverlay();

  return (
    <div className="flex w-full items-center flex-col justify-start py-4">
      <h1 className="text-3xl font-bold text-slate-800 mt-4">To Do List!</h1>
      <main className="mt-10 md:mt-20 grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <TaskListComponent status="Not Started"></TaskListComponent>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <TaskListComponent status="In Progress"></TaskListComponent>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <TaskListComponent status="Done"></TaskListComponent>
        </div>
        <TaskFormOverlay show={showOverlay}></TaskFormOverlay>
      </main>
    </div>
  );
}
export default App;
