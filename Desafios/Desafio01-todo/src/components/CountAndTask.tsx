import { Trash } from "phosphor-react";
import { ITask } from "../interfaces/TaskProps";

import styles from "./CountAndTask.module.css";


interface CountAndTaskProps {
  id?: string;
  content: ITask;
  onCheck: (taskID: string) => ITask | void;
  onDeleteTask: (id: string) => void;
}

export function CountAndTask({ content, onDeleteTask, onCheck }: CountAndTaskProps) {
  function handleDeleteTask() {
    onDeleteTask(content.id);
  }

  function handleCheckedTask() {
    onCheck(content.id);
  }

  return (
    <article>
      <div className={styles.tasksContent}>
        <div className={styles.infoCheck}>
          <label>
            <input
              name="infoCheck"
              type="checkbox"
              title="Set Complete"
              onChange={handleCheckedTask}
            />
            <p className={content.check ? styles.infoChecked : undefined }>{content.name}</p>
          </label>

          <button
            onClick={handleDeleteTask}
            className={styles.trashButton}
            title="Delete Task!"
          >
            <Trash size={17.45} />
          </button>
        </div>
      </div>
    </article>
  );
}
