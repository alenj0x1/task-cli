import { TaskService } from "./features/task/task.service.js";

const service = new TaskService();

console.log(service.all({}));