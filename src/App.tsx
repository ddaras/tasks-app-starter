import React from "react";
import {
  KanbanBoard,
  KanbanCard,
  KanbanColumn,
  OnDragOverProps,
} from "./components/kanban-board";
import {
  CreateTaskDialog,
  DEFAULT_TASK_STATUS,
  EditTaskDialog,
  ITask,
  ITaskForm,
  TASKS_LIST,
  TASK_STATUSES,
  TaskActions,
  TaskCard,
  TaskToolbar,
} from "./features/tasks";
import { DefaultLayout } from "./components/default-layout";
import { Button } from "./components/ui/button";
import { USERS_LIST } from "./features/users";
import { PlusIcon } from "@radix-ui/react-icons";

const groupTasks = (tasks: ITask[]) => {
  return tasks.reduce(function (acc, task) {
    acc[task.status.id] = acc?.[task.status.id] || [];
    acc[task.status.id].push(task);

    return acc;
  }, {} as Record<ITask["status"]["id"], ITask[]>);
};

function App() {
  const [createVisible, setCreateVisible] = React.useState(false);
  const [taskToEdit, setTaskToEdit] = React.useState<ITask | undefined>(
    undefined
  );
  const [tasks, setTasks] = React.useState(TASKS_LIST);

  const groupedTasksList = React.useMemo(() => {
    return groupTasks(tasks);
  }, [tasks]);

  const handleCreateTask = (task: ITask) => {
    setTasks((prevTasks) => [...prevTasks, task]);
    setCreateVisible(false);
  };

  const handleUpdateTask = (taskId?: string, task?: ITaskForm) => {
    if (!taskId) return false;

    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    const newTasks = [...tasks];
    newTasks[taskIndex] = {
      ...tasks[taskIndex],
      ...task,
    };

    setTasks(newTasks);

    setTaskToEdit(undefined);
  };

  const handleDeleteTask = (taskId?: string) => {
    if (!taskId) return false;

    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);

    setTasks(newTasks);

    setTaskToEdit(undefined);
  };

  const handleAssigneeChange = (taskId: string, userId: string) => {
    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    const newTasks = [...tasks];
    newTasks[taskIndex] = {
      ...tasks[taskIndex],
      assignee: USERS_LIST.find((u) => u.id === userId),
    };

    setTasks(newTasks);
  };

  const handleStatusChange = (taskId: string, statusId: string) => {
    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    const newTasks = [...tasks];
    newTasks[taskIndex] = {
      ...tasks[taskIndex],
      status:
        TASK_STATUSES.find((s) => s.id === statusId) || DEFAULT_TASK_STATUS,
    };

    setTasks(newTasks);
  };

  const handleDragOver = ({ source, destination }: OnDragOverProps) => {
    // moving
    if (source.droppableId !== destination.droppableId) {
      const sourceItems = [
        ...tasks.filter((t) => t.status.id === source.droppableId),
      ];
      const destItems = [
        ...tasks.filter((t) => t.status.id === destination.droppableId),
      ];

      // copy tasks
      const newTasks = [...tasks];

      // remove from source
      const removed = sourceItems[source.index];
      const removedIndex = newTasks.findIndex((t) => t.id === removed.id);
      newTasks.splice(removedIndex, 1);

      // update status
      removed["status"] =
        TASK_STATUSES.find((s) => s.id === destination.droppableId) ||
        DEFAULT_TASK_STATUS;

      // add to destination
      destItems.splice(destination.index, 0, removed);

      // filter tasks
      const fitleredTasks = [
        ...newTasks.filter((x) => x.status.id !== destination.droppableId),
      ];

      // concat arrays
      const concatenatedTasks = fitleredTasks.concat(destItems);

      setTasks(concatenatedTasks);
    }
    // sorting
    else {
      const sourceItems = [
        ...tasks.filter((t) => t.status.id === source.droppableId),
      ];

      // copy tasks
      const newTasks = [...tasks];

      // remove from position
      const removed = sourceItems[source.index];
      const removedIndex = newTasks.findIndex((t) => t.id === removed.id);
      newTasks.splice(removedIndex, 1);
      sourceItems.splice(source.index, 1);

      // add to position
      sourceItems.splice(destination.index, 0, removed);

      // filter tasks
      const fitleredTasks = [
        ...newTasks.filter((x) => x.status.id !== source.droppableId),
      ];

      // concat arrays
      const concatenatedTasks = fitleredTasks.concat(sourceItems);

      setTasks(concatenatedTasks);
    }
  };

  console.log(tasks);

  return (
    <DefaultLayout>
      <div className="flex items-center justify-between h-[100px]">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">
          📝 Figma Tasks
        </h1>

        <div className="">
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              setCreateVisible(true);
            }}
          >
            <div className="flex items-center gap-4">
              <PlusIcon />{" "}
              <span className="hidden sm:inline">Create your first task</span>
            </div>
          </Button>
        </div>
      </div>

      <div className="h-[calc(100%-120px)]">
        <KanbanBoard onDragOver={handleDragOver}>
          {TASK_STATUSES.map((status) => {
            const statusId = status.id;

            const taskStatus =
              TASK_STATUSES.find((s) => s.id === statusId) ||
              DEFAULT_TASK_STATUS;

            const items = groupedTasksList?.[statusId] || [];

            return (
              <KanbanColumn
                key={statusId}
                id={statusId}
                title={taskStatus.label}
                icon={taskStatus.icon}
                color={taskStatus.color}
              >
                {items.map((task, index) => (
                  <KanbanCard key={task.id} id={task.id} index={index}>
                    <TaskCard
                      title={task.title}
                      description={task.description}
                      toolbar={
                        <TaskToolbar
                          task={task}
                          onClickEdit={setTaskToEdit}
                          onClickDelete={(task) => {
                            handleDeleteTask(task.id);
                          }}
                        />
                      }
                      actions={
                        <TaskActions
                          task={task}
                          onAssigneeChange={(userId) => {
                            handleAssigneeChange(task.id, userId);
                          }}
                          onStatusChange={(statusId) => {
                            handleStatusChange(task.id, statusId);
                          }}
                        />
                      }
                      color={taskStatus.color}
                    />
                  </KanbanCard>
                ))}
              </KanbanColumn>
            );
          })}
        </KanbanBoard>
      </div>

      <CreateTaskDialog
        open={createVisible}
        onClose={() => {
          setCreateVisible(false);
        }}
        onCreate={(values) => {
          handleCreateTask({
            ...values,
            id: `id-${Math.random()}`,
            status: DEFAULT_TASK_STATUS,
          });
        }}
      />

      <EditTaskDialog
        task={taskToEdit}
        open={Boolean(taskToEdit)}
        onClose={() => {
          setTaskToEdit(undefined);
        }}
        onUpdate={(values) => {
          handleUpdateTask(taskToEdit?.id, values);
        }}
      />
    </DefaultLayout>
  );
}

export default App;
