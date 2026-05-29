import { TaskStatusEnum } from "./task.enums";
import { Task } from "./task.interfaces.js";

const task: Task[] = [
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

console.log(task)