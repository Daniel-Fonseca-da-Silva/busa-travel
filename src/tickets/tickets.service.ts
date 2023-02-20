import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { TicketsRepository } from './repositories/tickets.repository';

@Injectable()
export class TicketsService {
  constructor(private readonly ticketsRepository: TicketsRepository) {}

  create(createTicketDto: CreateTicketDto) {
    return this.ticketsRepository.create(createTicketDto);
  }

  findAll() {
    return this.ticketsRepository.findAll();
  }

  findOne(id: number) {
    return this.ticketsRepository.findOne(id);
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return this.ticketsRepository.update(id, updateTicketDto);
  }

  remove(id: number) {
    return this.ticketsRepository.remove(id);
  }
}
