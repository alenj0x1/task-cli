import { CreateTaskDto } from "../dtos/create-task.dto";
import { FilterAllTask } from "../dtos/filter-all-task.dto";
import { UpdateTaskDto } from "../dtos/update-task.dto";
import { Task } from "./task.interface";

export interface ITaskService {
    add(data: CreateTaskDto): Promise<Task>;
    update(id: number, data: UpdateTaskDto): Promise<Task>;
    get(where: { id?: number, description?: string }): Task | null;
    all(data: FilterAllTask): Task[];
    remove(id: number): Promise<boolean>;

    fsInit(): void;
    fsUpdate(): void;
}