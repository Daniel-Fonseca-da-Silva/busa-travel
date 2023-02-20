import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  origin: string;

  @IsString()
  @IsNotEmpty()
  destiny: string;

  @IsDateString()
  @IsNotEmpty()
  dateBoarding: Date;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @MinLength(2)
  @MaxLength(2)
  state: string;

  passengerId: number;
}
