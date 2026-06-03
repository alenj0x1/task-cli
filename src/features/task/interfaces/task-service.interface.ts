import { CreateTaskDto } from "../dtos/create-task.dto";
import { FilterAllTask } from "../dtos/filter-all-task.dto";
import { UpdateTaskDto } from "../dtos/update-task.dto";
import { Task } from "./task.interface";

export interface ITaskService {
    add(data: CreateTaskDto): Task;
    update(id: number, data: UpdateTaskDto): Task;
    getById(id: number): Task;
    all(data: FilterAllTask): Task[];
    remove(id: number): boolean;
}