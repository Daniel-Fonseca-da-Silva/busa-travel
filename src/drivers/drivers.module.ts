import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { DriverRepository } from './repositories/driver.repository';

@Module({
  controllers: [DriversController],
  providers: [DriversService, PrismaService, DriverRepository],
})
export class DriversModule {}
