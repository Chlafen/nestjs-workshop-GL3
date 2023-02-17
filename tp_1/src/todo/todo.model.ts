export enum TodoStatusEnum {
  'actif' = "En cours",
  'waiting' = "En attente",
  'done' = "Finalisé"
}

export class TodoModel {
  id: string;
  createdAt: Date;
  title: string;
  description: string;
  status: TodoStatusEnum;
}