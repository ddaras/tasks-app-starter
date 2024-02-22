import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

export type DraggableItemProps = {
  id: string;
  index: number;
  children: React.ReactNode;
};

const DraggableItem = ({ id, children, index }: DraggableItemProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};

export { DraggableItem };
