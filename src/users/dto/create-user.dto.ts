import {
  IsEmail,
  IsInt,
  IsMobilePhone,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  document: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsMobilePhone()
  tel: string;

  @IsNumber()
  amount: number;
}
