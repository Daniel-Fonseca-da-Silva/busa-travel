import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTicketDto } from '../dto/create-ticket.dto';
import { UpdateTicketDto } from '../dto/update-ticket.dto';
import { TicketEntity } from '../entities/ticket.entity';

@Injectable()
export class TicketsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTicketDto: CreateTicketDto): Promise<TicketEntity> {
    return this.prisma.ticket.create({
      data: createTicketDto,
    });
  }

  async findAll(): Promise<TicketEntity[]> {
    return await this.prisma.ticket.findMany();
  }

  async findOne(id: number): Promise<TicketEntity> {
    return await this.prisma.ticket.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateTicketDto: UpdateTicketDto,
  ): Promise<TicketEntity> {
    return await this.prisma.ticket.update({
      where: {
        id,
      },
      data: updateTicketDto,
    });
  }

  async remove(id: number): Promise<TicketEntity> {
    return this.prisma.ticket.delete({
      where: {
        id,
      },
    });
  }
}
