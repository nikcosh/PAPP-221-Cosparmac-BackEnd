import { IsString, IsNumber, IsOptional, IsIn, Min, Max } from 'class-validator';

export class CreateCarteDto {
  @IsString()
  titlu: string;

  @IsString()
  autor: string;

  @IsNumber()
  @Min(1900)
  @Max(2025)
  an: number;

  @IsString()
  @IsIn(['Fictiune', 'Drama', 'Actiune'])
  gen: string;

  @IsNumber()
  @Min(1)
  pret: number;
}
