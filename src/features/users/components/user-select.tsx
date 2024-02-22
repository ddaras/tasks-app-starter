import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { USERS_LIST } from "..";

type UserSelectProps = {
  defaultValue?: string;
  onChange: (userId: string) => void;
};

export function UserSelect({ onChange, defaultValue }: UserSelectProps) {
  return (
    <Select onValueChange={onChange} defaultValue={defaultValue}>
      <SelectTrigger className="w-[140px] border-none bg-transparent">
        <SelectValue placeholder="👤 Assignee" />
      </SelectTrigger>
      <SelectContent>
        {USERS_LIST.map((user) => (
          <SelectItem key={user.id} value={user.id}>
            {user.avatar} {user.displayName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
