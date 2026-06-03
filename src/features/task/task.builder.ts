import { Task } from "./task.interfaces.js";
import { tasks } from "./task.service.js";
import { TaskStatus } from "./task.types";

export function builderTask(data: {
    description: string;
    status: TaskStatus
}): Task {
    return {
        ...data,
        id: tasks.length + 1,
        update_at: new Date(),
        created_at: new Date()
    }
}