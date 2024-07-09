// task.module.ts
import { Module } from '@nestjs/common';
import { TaskController } from './tasks.controller';
import { TasksService } from './tasks.service'; // Importa TasksService

@Module({
  controllers: [TaskController],
  providers: [TasksService], 
})
export class TaskModule {}
