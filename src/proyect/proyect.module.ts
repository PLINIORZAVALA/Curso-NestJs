import { Module } from '@nestjs/common';
import { ProyectController } from './proyect.controller';
import { ProyectService } from './proyect.service';

@Module({
  controllers: [ProyectController],
  providers: [ProyectService]
})
export class ProyectModule {}
