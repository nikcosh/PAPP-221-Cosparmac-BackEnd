import { PartialType } from '@nestjs/mapped-types';
import { CreateCarteDto } from './create-carte.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCarteDto extends PartialType(CreateCarteDto) {
  @IsOptional()
  @IsString()
  titlu?: string;
}
