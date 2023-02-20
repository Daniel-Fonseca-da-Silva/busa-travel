import { Module } from '@nestjs/common';
import { BusesService } from './buses.service';
import { BusesController } from './buses.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { BusRepository } from './repositories/bus.repository';

@Module({
  controllers: [BusesController],
  providers: [BusesService, PrismaService, BusRepository],
})
export class BusesModule {}
