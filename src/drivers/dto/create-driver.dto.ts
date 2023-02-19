import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDriverDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  driverLicense: string;

  @IsNumber()
  salary: number;
}
