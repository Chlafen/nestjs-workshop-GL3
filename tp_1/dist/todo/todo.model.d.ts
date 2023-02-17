export declare enum TodoStatusEnum {
    'actif' = "En cours",
    'waiting' = "En attente",
    'done' = "Finalis\u00E9"
}
export declare class TodoModel {
    id: string;
    createdAt: Date;
    title: string;
    description: string;
    status: TodoStatusEnum;
}
