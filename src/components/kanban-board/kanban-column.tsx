import { ColorTypes } from "@/features/common";
import { cn } from "@/lib/utils";
import { DroppableArea } from "../dnd";

export type KanbanColumnProps = {
  id: string;
  title: string;
  icon: string;
  children: JSX.Element[] | JSX.Element;
  color: ColorTypes;
};

export function KanbanColumn({
  id,
  title,
  icon,
  children,
  color,
}: KanbanColumnProps) {
  return (
    <DroppableArea id={id}>
      <div
        className={cn(
          "pb-2 rounded-xl h-full",
          { "bg-danger": color === "danger" },
          {
            "bg-warning": color === "warning",
          },
          {
            "bg-success": color === "success",
          }
        )}
      >
        <div className="rounded-xl flex flex-col gap-2 bg-gray-200 h-full">
          <div className="flex items-center gap-2 p-2.5">
            <div>{icon}</div>
            <div>{title}</div>
          </div>

          <div className="flex flex-col gap-4 rounded-xl bg-white p-4 h-full border overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </DroppableArea>
  );
}
