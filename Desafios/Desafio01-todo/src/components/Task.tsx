import { Notepad, PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { CountAndTask } from "./CountAndTask";
import { ITask } from "../interfaces/TaskProps";

import styles from "./Task.module.css";

const defaultTask = {
  id: "",
  name: "",
  check: false,
};

export function Task() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskText, setNewTaskText] = useState<ITask>(defaultTask);

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText(defaultTask);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText({
      ...defaultTask,
      name: event.target.value,
      id: Date.now().toString(36),
    });
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  }

  function onChecked(taskID: string): ITask | void {
    const newTasks = tasks.map((task) => {
      if (task.id === taskID) {
        return {
          ...task,
          check: !task.check,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  const isNewTaskEmpty = !newTaskText?.name?.length;
  const checked = tasks.filter((task) => task.check).length;

  return (
    <div>
      <form onSubmit={handleNewTask} className={styles.addTasks}>
        <input
          name="task"
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText.name}
          onChange={handleNewTaskChange}
          required
        />

        <button type="submit" disabled={isNewTaskEmpty}>
          Criar
          <PlusCircle size={18} />
        </button>
      </form>

      <div className={styles.emptyContent}>
        <div className={styles.info}>
          <div>
            <p>Tarefas criadas </p>
            <div className={styles.counter}>{tasks.length}</div>
          </div>

          <div>
            <span>Concluídas </span>
            <div className={styles.counter}>
              {" "}
              {checked} de {tasks.length}
            </div>
          </div>
        </div>

        {!tasks?.length && (
          <div className={styles.emptyTasks}>
            <div className={styles.line}></div>
            <Notepad size={56} color="#505050" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
      </div>

      <div className={styles.taskList}>
        {tasks.map((task) => {
          return (
            <CountAndTask
              key={task.id}
              content={task}
              onDeleteTask={deleteTask}
              onCheck={() => onChecked(task.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
