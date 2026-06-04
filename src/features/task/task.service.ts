import { TaskStatusEnum } from "./task.enums.js";
import { Task } from "./interfaces/task.interface.js";
import { ITaskService } from "./interfaces/task-service.interface.js";
import { CreateTaskDto } from "./dtos/create-task.dto.js";
import { FilterAllTask } from "./dtos/filter-all-task.dto.js";
import { UpdateTaskDto } from "./dtos/update-task.dto.js";
import { ErrorConstant } from "../../shared/constants/error.constant.js";
import fs from 'fs/promises'

export const DATA_PATH = 'data.json';

export class TaskService implements ITaskService {
    private tasks: Task[] = [];

    async add(data: CreateTaskDto): Promise<Task> {
        const findPreviousTask = this.get({
            description: data.description
        }, false)
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
        await this.fsUpdate();

        return task;
    }

    async update(id: number, data: UpdateTaskDto): Promise<Task> {
        const task = this.get({ id }) as Task;

        const updatedTask = { ...task, ...data };
        this.tasks.splice(this.tasks.indexOf(task), 1, updatedTask);

        await this.fsUpdate();

        return task;
    }

    get(where: {
        id?: number, description?: string
    }, withError: boolean = true): Task | null {
        const task = this.tasks.find(x => x.id == where.id || x.description == where.description);
        if (!task) {
            if (withError) {
                throw new Error('La tarea no existe');
            }
            return null;
        }

        return task;
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

    async remove(id: number): Promise<boolean> {
        const task = this.get({ id }) as Task;

        this.tasks.splice(this.tasks.indexOf(task), 1);

        await this.fsUpdate();

        return true;
    }

    async fsInit() {
        const raw = await fs.readFile(DATA_PATH, 'utf-8');
        const tasks: Task[] = JSON.parse(raw).tasks as Task[];
        this.tasks = tasks;
    }

    async fsUpdate() {
        await fs.writeFile(DATA_PATH, JSON.stringify({
            tasks: this.tasks
        }, null, 2), 'utf-8');
    }

}