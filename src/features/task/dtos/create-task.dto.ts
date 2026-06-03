import { TaskStatus } from "../task.types";

export interface CreateTaskDto {
    description: string;
    status?: TaskStatus;
}