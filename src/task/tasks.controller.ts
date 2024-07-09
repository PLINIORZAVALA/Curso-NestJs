import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Controller('/tasks')
export class TaskController {

    //Constructor creado para la comunicación con el SERVICE
    tasksService:TasksService
    //Instanciamos de la clase services con CONSTRUCTOR
    constructor(tasksService:TasksService){
        this.tasksService = tasksService;
    }

    @Get()
    getAllTasks(@Query() query: any) {
        console.log(query)
        return this.tasksService.getTasks();
    }

    @Get('/:id')//Se concatena con task
    getTask(@Param('id') id: string) {
        console.log('id')
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    createTasks(@Body() task: CreateTaskDto) {
        return this.tasksService.createTasks(task);
    }

    @Put()
    updateTasks(@Body() task: UpdateTaskDto) {
        return this.tasksService.updateTasks(task);
    }

    @Delete()
    deleteTasks() {
        return this.tasksService.deleteTasks();
    }

    @Patch()
    updateTasksStatus() {
        return this.tasksService.updateTasksStatus();
    }
}