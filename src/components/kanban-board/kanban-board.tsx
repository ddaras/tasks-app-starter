import { DndContext } from "../dnd";

export type OnDragOverProps = {
  source: { droppableId: string; index: number };
  destination: { droppableId: string; index: number };
};

export type KanbanBoardProps = {
  children: JSX.Element[] | JSX.Element;
  onDragOver: (props: OnDragOverProps) => void;
};

const KanbanBoard = ({ children, onDragOver }: KanbanBoardProps) => {
  return (
    <DndContext
      onDragEnd={(result) => {
        if (!result.destination) return;

        const { source, destination } = result;

        onDragOver({
          source: { droppableId: source.droppableId, index: source.index },
          destination: {
            droppableId: destination.droppableId,
            index: destination.index,
          },
        });
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start h-full">
        {children}
      </div>
    </DndContext>
  );
};

KanbanBoard.displayName = "KanbanBoard";

export { KanbanBoard };
