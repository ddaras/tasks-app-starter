import * as React from "react";
import { Droppable } from "react-beautiful-dnd";

export type DroppableAreaProps = {
  id: string;
  type?: string;
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  maxHeight?: number;
};

const DroppableArea = React.memo(({ id, children }: DroppableAreaProps) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="h-full overflow-y-hidden"
        >
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
});

DroppableArea.displayName = "Droppable";

export { DroppableArea };
