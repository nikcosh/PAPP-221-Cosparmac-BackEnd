import { Module } from '@nestjs/common';
import { CartiController } from './carti.controller';
import { CartiService } from './carti.service';

@Module({
  controllers: [CartiController],
  providers: [CartiService],
})
export class CartiModule {}
