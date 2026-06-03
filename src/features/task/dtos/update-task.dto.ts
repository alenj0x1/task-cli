import { TaskStatus } from "../task.types";

export interface UpdateTaskDto {
    description?: string;
    status?: TaskStatus;
}