import { consoleCommon, consoleError } from "../../shared/helpers/console.helper.js";
import { TaskStatusEnum } from "./task.enums.js";
import { Task } from "./task.interfaces.js";

export const tasks: Task[] = [
    {
        id: 1,
        description: 'Pase a producción',
        status: TaskStatusEnum.Pending,
        created_at: new Date(),
        update_at: new Date()
    },
    {
        id: 2,
        description: 'Culminar caracteristica de biometrico',
        status: TaskStatusEnum.Current,
        created_at: new Date(),
        update_at: new Date()
    },
    {
        id: 3,
        description: 'Almorzar',
        status: TaskStatusEnum.Completed,
        created_at: new Date(),
        update_at: new Date()
    }
]

export function addTask(task: Task): Task | null {
    if (tasks.find(tk => tk.id == task.id))
    {
        consoleError("No puedes crear una tarea, con una ID existente")
        return null;
    }

    if (tasks.find(tk => tk.description == task.description))
    {
        consoleError("No puedes crear una tarea, con la misma descripcion")
        return null;
    }

    tasks.push(task);
    return task;
}

export function listTasks() {
    for (const task of tasks)
    {
        consoleCommon(task.description)
    }
}