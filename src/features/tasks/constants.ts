import { ITask, ITaskStatus } from ".";
import { USERS_LIST } from "../users";

export const TASK_STATUSES: ITaskStatus[] = [
  { id: "todo", label: "To do", icon: "🍅", color: "danger" },
  {
    id: "doing",
    label: "Doing",
    icon: "🥕",
    color: "warning",
  },
  {
    id: "done",
    label: "Done",
    icon: "✅",
    color: "success",
  },
];

export const DEFAULT_TASK_STATUS = TASK_STATUSES[0];

export const TASKS_LIST: ITask[] = [
  {
    id: "id1",
    title:
      "Design a login and create account feature for a financial goal tracking app to help high school students",
    description: '"Make it the right kind of wrong!"',
    status: TASK_STATUSES.find((s) => s.id === "todo") || DEFAULT_TASK_STATUS,
  },
  {
    id: "id2",
    title: "Design a mobile in-flight wifi experience.",
    description: "Lorem ipsum dolor blabla let's carpool together tomorrow",
    status: TASK_STATUSES.find((s) => s.id === "todo") || DEFAULT_TASK_STATUS,
    assignee: USERS_LIST.find((u) => u.id === "user-1"),
  },
  {
    id: "id3",
    title:
      "Please, dont design another weather app. Unless you really want to.",
    description: "Lorem ipsum dolor blabla let's carpool together tomorrow",
    status: TASK_STATUSES.find((s) => s.id === "todo") || DEFAULT_TASK_STATUS,
    assignee: USERS_LIST.find((u) => u.id === "user-2"),
  },
  {
    id: "id4",
    title: "Find a newspaper. Redesign the font page.",
    description: "Lorem ipsum dolor blabla let's carpool together tomorrow",
    status: TASK_STATUSES.find((s) => s.id === "doing") || DEFAULT_TASK_STATUS,
    assignee: USERS_LIST.find((u) => u.id === "user-3"),
  },
  {
    id: "id5",
    title: "Design a vending machine locator.",
    description: "Lorem ipsum dolor blabla let's carpool together tomorrow",
    status: TASK_STATUSES.find((s) => s.id === "doing") || DEFAULT_TASK_STATUS,
    assignee: USERS_LIST.find((u) => u.id === "user-4"),
  },
  {
    id: "id6",
    title: "Redesign a website so it's more color-blind friendly.",
    description: "Lorem ipsum dolor blabla let's carpool together tomorrow",
    status: TASK_STATUSES.find((s) => s.id === "done") || DEFAULT_TASK_STATUS,
  },
];
