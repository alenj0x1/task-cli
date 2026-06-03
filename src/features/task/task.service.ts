import { TaskStatusEnum } from "./task.enums.js";
import { Task } from "./interfaces/task.interface.js";
import { ITaskService } from "./interfaces/task-service.interface.js";
import { CreateTaskDto } from "./dtos/create-task.dto.js";
import { FilterAllTask } from "./dtos/filter-all-task.dto.js";
import { UpdateTaskDto } from "./dtos/update-task.dto.js";
import { ErrorConstant } from "../../shared/constants/error.constant.js";
export class TaskService implements ITaskService {
    private tasks: Task[] = [
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
    ];

    add(data: CreateTaskDto): Task {
        const findPreviousTask = this.tasks.find(x => x.description == data.description);
        if (findPreviousTask) {
            throw new Error(ErrorConstant.taskPreviouslyCreated);
        }

        const task: Task = {
            id: this.tasks.length + 1,
            description: data.description,
            status: data.status ?? TaskStatusEnum.Pending,
            created_at: new Date(),
            update_at: new Date()
        };

        this.tasks.push(task)
        console.log('Tarea creada de forma correcta!')

        return task;
    }

    update(id: number, data: UpdateTaskDto): Task {
        throw new Error("Method not implemented.");
    }

    getById(id: number): Task {
        throw new Error("Method not implemented.");
    }

    all(data: FilterAllTask): Task[] {
        let taskFiltered = this.tasks;

        if (data.description) {
            taskFiltered = taskFiltered.filter(x => x.description.includes(data.description ?? ''))
        }

        if (data.status) {
            taskFiltered = taskFiltered.filter(x => x.status == data.status)
        }

        return this.tasks;
    }

    remove(id: number): boolean {
        throw new Error("Method not implemented.");
    }
}