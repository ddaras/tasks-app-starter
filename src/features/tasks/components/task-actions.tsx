import { ITask, TaskStatusSelect } from "..";
import { UserSelect } from "@/features/users";

type TaskActionsProps = {
  task: ITask;
  onAssigneeChange: (userId: string) => void;
  onStatusChange: (statusId: string) => void;
};

export const TaskActions = ({
  task,
  onAssigneeChange,
  onStatusChange,
}: TaskActionsProps) => {
  return (
    <div className="flex flex-col items-end">
      <div>
        <TaskStatusSelect
          defaultValue={task?.status?.id}
          onChange={onStatusChange}
        />
      </div>
      <div>
        <UserSelect
          defaultValue={task?.assignee?.id}
          onChange={onAssigneeChange}
        />
      </div>
    </div>
  );
};
