import { TaskStatus } from "./task.types.js";

export interface Task {
    readonly id: number; // INCREMENTAL INT -> number | UUID -> string
    description: string;
    status: TaskStatus;
    created_at: Date; // -> Luego pasar a una interfaz de auditoria
    update_at: Date; // -> Luego pasar a una interfaz de auditoria
}