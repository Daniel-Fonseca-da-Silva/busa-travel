import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  origin: string;

  @IsString()
  @IsNotEmpty()
  destiny: string;

  @IsDate()
  @IsNotEmpty()
  dateBoarding: Date;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  state: string;

  passengerId: number;
}
