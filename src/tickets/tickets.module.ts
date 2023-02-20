import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { TicketsRepository } from './repositories/tickets.repository';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService, PrismaService, TicketsRepository],
})
export class TicketsModule {}
