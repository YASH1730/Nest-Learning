import { Type } from 'class-transformer';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @Type(() => String)
  @IsString()
  title: string;

  @Type(() => Number)
  @IsNumber()
  price: number;

  @IsOptional()
  @Type(() => String)
  @IsString()
  description?: string;

  @Type(() => Number)
  @IsNumber()
  stock: number;
}
