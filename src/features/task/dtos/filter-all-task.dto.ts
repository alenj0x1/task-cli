import { TaskStatus } from "../task.types";

export interface FilterAllTask {
    description?: string;
    status?: TaskStatus;
}