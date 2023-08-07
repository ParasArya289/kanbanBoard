import { useKanban } from "../../context/context";
import "./TaskCards.css";

export const TaskCard = ({ title }) => {
  const { setCurrentlyDragging } = useKanban();
  return (
    <div
      className="taskcard"
      draggable={true}
      onDragStart={() => setCurrentlyDragging(title)}
      onDragEnd={() => setCurrentlyDragging(null)}
    >
      <div>
        <b>Tasks</b>
      </div>
      <span>{title}</span>
    </div>
  );
};
