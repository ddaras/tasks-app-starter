import { Button } from "@/components/ui/button";
import { ITask } from "..";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

type TaskToolbarProps = {
  task: ITask;
  onClickEdit: (task: ITask) => void;
  onClickDelete: (task: ITask) => void;
};

export function TaskToolbar({
  task,
  onClickEdit,
  onClickDelete,
}: TaskToolbarProps) {
  return (
    <div className="invisible group-hover:visible absolute -top-4 right-2 border rounded-lg bg-white flex gap-1">
      <Button
        variant="ghost"
        size="xs"
        onClick={() => {
          onClickEdit(task);
        }}
      >
        <Pencil1Icon className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="xs"
        onClick={() => {
          onClickDelete(task);
        }}
      >
        <TrashIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
