import * as React from "react";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";

export type DndContextProps = {
  children: React.ReactNode;
  onDragEnd: OnDragEndResponder;
};

const DndContext = React.memo(({ children, onDragEnd }: DndContextProps) => {
  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>;
});

DndContext.displayName = "DndContext";

export { DndContext };
