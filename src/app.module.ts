import { Module } from '@nestjs/common';
import { CartiModule } from './carti/carti.module';

@Module({
  imports: [CartiModule],
})
export class AppModule {}
