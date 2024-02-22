import { FileIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { ColorTypes } from "@/features/common";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export type TaskCardProps = {
  title: string;
  description?: string;
  actions: JSX.Element;
  toolbar: JSX.Element;
  color: ColorTypes;
};

export const TaskCard = ({
  title,
  description,
  actions,
  toolbar,
  color,
}: TaskCardProps) => {
  return (
    <Card
      className={cn(
        "shadow-none relative group",
        { "bg-danger": color === "danger" },
        {
          "border-warning border-2 bg-warning-background border-dashed":
            color === "warning",
        },
        {
          "border-success border-2 bg-success-background": color === "success",
        }
      )}
    >
      {toolbar}

      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-12 p-4 gap-4",
          { "text-danger-foreground": color === "danger" },
          {
            "text-warning-foreground": color === "warning",
          },
          {
            "text-success-foreground": color === "success",
          }
        )}
      >
        <div className="col-span-8 flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="w-6 pt-2 pr-2">
              <FileIcon />
            </div>
            <CardTitle className="text-md">{title}</CardTitle>
          </div>
          <CardDescription
            className={cn("text-sm opacity-60", {
              "text-danger-foreground": color === "danger",
            })}
          >
            {description}
          </CardDescription>
        </div>
        <div className="col-span-4">{actions}</div>
      </div>
    </Card>
  );
};
