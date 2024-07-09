import { Module } from '@nestjs/common';
import { TaskModule } from './task/tasks.module';
import { ProyectModule } from './proyect/proyect.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [TaskModule, ProyectModule, AuthModule, UsersModule],
  controllers: [HelloController],
})
export class AppModule {}
