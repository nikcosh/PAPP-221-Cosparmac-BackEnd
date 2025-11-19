import { IsOptional, IsString, IsNumber } from 'class-validator';

export class SearchCarteDto {
  @IsOptional()
  @IsString()
  nume?: string;

  @IsOptional()
  @IsNumber()
  minId?: number;

  @IsOptional()
  @IsNumber()
  maxId?: number;
}
