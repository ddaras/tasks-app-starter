import { DraggableItem } from "../dnd";

export type KanbanCardProps = {
  id: string;
  index: number;
  children: JSX.Element;
};

export const KanbanCard = ({ id, index, children }: KanbanCardProps) => {
  return (
    <DraggableItem id={id} index={index}>
      {children}
    </DraggableItem>
  );
};
