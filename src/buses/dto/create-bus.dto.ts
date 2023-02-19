import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateBusDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  capacity: number;

  @IsString()
  @IsNotEmpty()
  year: string;

  @IsString()
  @IsNotEmpty()
  color: string;
}
