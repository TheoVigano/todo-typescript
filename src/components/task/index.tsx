import { Trash } from "@phosphor-icons/react";
import "./styles.css";

interface TaskProps {
  id: number;
  description: string;
  onDelete: (id: number) => void;
}

export function Task({id, description, onDelete }: TaskProps) {
  return (
    <div className="task-container">
      <p className="task-description">{description}</p>
      <button type="button" className="delete-btn" onClick={() => onDelete(id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}
