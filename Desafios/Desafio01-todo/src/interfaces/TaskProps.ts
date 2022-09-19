export interface ITask {
  id: string;
  name: string;
  check: boolean;
}

export interface TaskProps {
  id: string;
  content: ITask;
  onCheck: (task: ITask) => ITask;
  onDeleteTask: (task: string) => void;
}
