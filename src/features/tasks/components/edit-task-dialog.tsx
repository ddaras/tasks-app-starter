import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TaskForm } from "./task-form";
import { ITask, ITaskForm } from "../types";

type EditTaskDialogProps = {
  task?: ITask;
  open: boolean;
  onClose: () => void;
  onUpdate: (task: ITaskForm) => void;
};

export function EditTaskDialog({
  task,
  open,
  onClose,
  onUpdate,
}: EditTaskDialogProps) {
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
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>

        <TaskForm initialValues={task} onSuccess={onUpdate} />
      </DialogContent>
    </Dialog>
  );
}
