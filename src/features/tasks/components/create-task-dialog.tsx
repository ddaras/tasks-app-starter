import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TaskForm } from "./task-form";
import { ITaskForm } from "..";

type CreateTaskDialogProps = {
  open: boolean;
  onClose: () => void;
  onCreate: (task: ITaskForm) => void;
};

export function CreateTaskDialog({
  open,
  onClose,
  onCreate,
}: CreateTaskDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
        </DialogHeader>

        <TaskForm onSuccess={onCreate} />
      </DialogContent>
    </Dialog>
  );
}
