import { useState } from "react";
import { flushSync } from "react-dom";
import { useKanban } from "../../context/context";
import { TaskCard } from "../TaskCards/TaskCards";
import "./KanbanBoard.css";

export const KanbanBoard = () => {
  const [dropping, setDropping] = useState(null);
  const { columns, setColumns, currentlyDragging } = useKanban();

  const taskDragHandler = (CL) => {
    const findTask = columns
      ?.find((column) =>
        column.tasks.some(({ title }) => title === currentlyDragging)
      )
      .tasks?.find(({ title }) => title === currentlyDragging);
    if (CL === findTask?.column) return;

    const newColumnsData = columns?.map((column) =>
      column.title === CL
        ? { ...column, tasks: [...column.tasks, { ...findTask, column: CL }] }
        : column.title === findTask.column
        ? {
            ...column,
            tasks: column?.tasks?.filter(
              ({ title }) => title !== findTask?.title
            )
          }
        : column
    );
    document.startViewTransition(() => {
      flushSync(() => {
        setColumns((prev) => newColumnsData);
      });
    });
    setDropping(null);
  };

  return (
    <div className="kanbanboard">
      {columns?.map((column, i) => (
        <div
          key={column.title}
          className="columns"
          style={{
            border: dropping === i ? "2px dashed grey" : ""
          }}
          onDragEnter={() => {
            setDropping(i);
          }}
          onDragLeave={() => {
            setDropping(null);
          }}
          onDrop={() => {
            taskDragHandler(column.title, i);
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <h3>{column.title}</h3>
          {column.tasks?.map((card) => (
            <TaskCard key={card?.title} title={card?.title} />
          ))}
        </div>
      ))}
    </div>
  );
};
