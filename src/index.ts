import { builderTask } from "./features/task/task.builder.js"
import { TaskStatusEnum } from "./features/task/task.enums.js"
import { addTask, listTasks } from "./features/task/task.service.js"

addTask(builderTask({ 
    description: "Jugar", status: TaskStatusEnum.Pending 
}))

addTask(builderTask({ 
    description: "Jugar", status: TaskStatusEnum.Pending 
}))

listTasks()