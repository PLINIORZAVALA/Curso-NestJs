import { ConsoleLogger, Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

// Para retornar un objeto
export interface User {
    name: string;
    age: number;
}

@Injectable()
export class TasksService {
    
    //Almacena los valor tasks
    private tasks = []

    getTasks(){
        return this.tasks;
    }

    getTask(id : number){
        const taskFound = this.tasks.find(task => task.id === id)
        if(!taskFound){
            return new NotFoundException('El id no fue encontrado')
        }

        return taskFound
    }

    createTasks(task: CreateTaskDto) {
        console.log(task)
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        })
        return task
      
    }

    updateTasks(task : UpdateTaskDto) {
        console.log(task)
        return 'Actualizando Tarea'
    }

    deleteTasks() {
        return 'Eliminando Tarea'
    }

    updateTasksStatus() {
        return 'Actualizacion Parcial'
    }
 
}