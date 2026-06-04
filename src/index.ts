import { TaskStatusEnum } from "./features/task/task.enums.js";
import { TaskService } from "./features/task/task.service.js";
import inquirer from 'inquirer'
import { consoleError, consoleSuccess } from "./shared/helpers/console.helper.js";
import { Task } from "./features/task/interfaces/task.interface.js";

(async () => {
    await main();
})();

async function main() {
    const service = new TaskService();
    await service.fsInit();

    while (true) {
        try {
            const { action } = await inquirer.prompt([
                {
                    type: 'rawlist',
                    name: 'action',
                    message: 'Menú principal - Seleccione una opción',
                    choices: ['Crear una tarea', 'Ver tarea', 'Actualizar una tarea', 'Listar todas las tareas', 'Remover una tarea']
                }
            ])

            switch (action) {
                case 'Crear una tarea': {
                    const { description } = await inquirer.prompt({
                        type: 'input',
                        name: 'description',
                        message: 'Descripción de la tarea'
                    })

                    const { confirmation } = await inquirer.prompt({
                        type: 'confirm',
                        message: '¿Está seguro de crear una tarea?',
                        name: 'confirmation'
                    })

                    if (!confirmation) {
                        consoleError('Se canceló la creación de la tarea.')
                        break;
                    }

                    const task = await service.add({
                        description,
                        status: TaskStatusEnum.Pending
                    })

                    consoleSuccess(`Se creó una tarea, con el ID: ${task.id}`);
                    break;
                }
                case 'Ver tarea': {
                    const { select } = await inquirer.prompt({
                        type: 'select',
                        choices: ['ID', 'Descripcion'],
                        message: 'Selecciona una opción, para buscar',
                        name: 'select'
                    });

                    const { value } = await inquirer.prompt({
                        type: 'input',
                        message: `Agrega el argumento para ${select}:`,
                        name: 'value'
                    });

                    let taskSearchOptions = {}

                    if (select === 'ID') {
                        taskSearchOptions = { id: value };
                    }


                    if (select === 'Descripcion') {
                        taskSearchOptions = { description: value };
                    }

                    const task = service.get(taskSearchOptions);

                    console.log(task);
                    break;
                }
                case 'Listar todas las tareas': {
                    // const tasks = service.all({});
                    // for (const task in tasks) {
                    //     console.log(tasks[task])
                    // }

                    for (const task of service.all({})) {
                        console.log(task)
                    }

                    break;
                }
                case 'Actualizar una tarea': {
                    const tasks = service.all({});
                    if (tasks.length == 0) {
                        consoleError('No hay tareas que puedas actualizar')
                        break;
                    }

                    const { description } = await inquirer.prompt({
                        type: 'select',
                        name: 'description',
                        message: 'Seleccione la tarea para actualizar',
                        choices: [...tasks.map(x => x.description)]
                    });

                    const taskToUpdate = tasks.find(x => x.description == description);
                    if (!taskToUpdate) return;

                    const { newDescription } = await inquirer.prompt({
                        type: 'input',
                        message: 'Agregue un nuevo valor para la descripción (en blanco, para dejar el actual)',
                        name: 'newDescription'
                    });

                    const { newStatus } = await inquirer.prompt({
                        type: 'select',
                        message: 'Agregue un nuevo valor para el estado (en blanco, para dejar el actual)',
                        name: 'newStatus',
                        choices: [TaskStatusEnum.Completed, TaskStatusEnum.Current, TaskStatusEnum.Pending, '-']
                    });

                    service.update(taskToUpdate.id, {
                        description: newDescription == "" ? taskToUpdate.description : newDescription,
                        status: newStatus == '-' ? taskToUpdate.status : newStatus
                    });

                    consoleSuccess(`Se actualizó la tarea, con ID: ${taskToUpdate.id}`);
                    break;
                }
                case 'Remover una tarea': {
                    const tasks = service.all({});
                    if (tasks.length == 0) {
                        consoleError('No hay tareas que puedas eliminar')
                        break;
                    }

                    const { description } = await inquirer.prompt({
                        type: 'select',
                        name: 'description',
                        message: 'Seleccione la tarea para eliminar',
                        choices: [...tasks.map(x => x.description)]
                    });

                    const taskToRemove = tasks.find(x => x.description == description);
                    if (!taskToRemove) return;

                    service.remove(taskToRemove.id);

                    consoleSuccess(`Se removió la tarea, con ID: ${taskToRemove.id}`);
                    break;
                }
            }
        } catch (error) {
            if (error instanceof Error) {
                consoleError(error.message)
            }
        }
    }

    // await service.fsInit()

    // const tasks = service.all({});
    // if (tasks.length === 0) {
    //     console.log('Sin tareas!')
    //     return;
    // }

    // // await service.add({
    // //     description: 'Una tarea',
    // //     status: TaskStatusEnum.Current
    // // })
    // // console.log(service.all({}));

    // const firstTask = tasks[0];
    // await service.remove(firstTask.id);
}