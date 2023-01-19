import { useEffect, useState } from "react";
import { BehaviorSubject, map, filter } from "rxjs";
import {
  createTask,
  IN_PROGRESS_STATUS,
  Task,
  TaskStatus,
} from "../utils/task.utils";

const fakeContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nihil molestiae corporis, fuga obcaecati ullam totam ducimus repudiandae, asperiores placeat alias non ab tenetur iure enim aliquam beatae aut sit.";
const fakeStatus = IN_PROGRESS_STATUS;
const fakeAuthorName = "Clement Parpaillon";
const fakeTasks = Array.from(Array(5)).map(() =>
  createTask(fakeAuthorName, fakeContent, fakeStatus)
);

const tasksSubject = new BehaviorSubject<Array<Task>>(fakeTasks);

const tasks$ = tasksSubject.asObservable();

export const tasksByStatus$ = (taskStatus: TaskStatus) =>
  tasks$.pipe(
    map((tasks) => tasks.filter((task) => task.status === taskStatus))
  );

export const addTask = (task: Task) =>
  tasksSubject.next([...tasksSubject.value, task]);

export const removeTasksByStatus = (status: TaskStatus) =>
  tasksSubject.next(
    tasksSubject.value.filter((task) => task.status !== status)
  );

export const removeTask = (id: string) =>
  tasksSubject.next(tasksSubject.value.filter((task) => task.id !== id));

const changeStatus = (status: TaskStatus): TaskStatus => {
  if (status === "Not Started") return "In Progress";
  return "Done";
};

export const updateTaskStatus = (id: string) => {
  const tasks = [...tasksSubject.value];
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    tasks[taskIndex].status = changeStatus(tasks[taskIndex].status);
    tasksSubject.next(tasks);
  }
};

export const useTasks = (taskStatus?: TaskStatus) => {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  useEffect(() => {
    const obs$ = taskStatus ? tasksByStatus$(taskStatus) : tasks$;
    const sub = obs$.subscribe((tasksByStatus) => setTasks([...tasksByStatus]));
    return () => sub.unsubscribe();
  }, []);

  return tasks;
};
