import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TASK_STATUSES } from "..";

type TaskStatusSelectProps = {
  defaultValue?: string;
  onChange: (statusId: string) => void;
};

export function TaskStatusSelect({
  onChange,
  defaultValue,
}: TaskStatusSelectProps) {
  return (
    <Select onValueChange={onChange} defaultValue={defaultValue}>
      <SelectTrigger className="w-[140px] border-none bg-transparent">
        <SelectValue placeholder="👤 Assignee" />
      </SelectTrigger>
      <SelectContent>
        {TASK_STATUSES.map((task) => (
          <SelectItem key={task.id} value={task.id}>
            {task.icon} {task.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
