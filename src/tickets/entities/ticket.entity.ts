import { Ticket } from '@prisma/client';

export class TicketEntity implements Ticket {
  id: number;
  origin: string;
  destiny: string;
  dateBoarding: Date;
  price: number;
  state: string;
  createdAt: Date;
  updateAt: Date;
  passengerId: number;
}
