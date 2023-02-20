import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBusDto } from '../dto/create-bus.dto';
import { UpdateBusDto } from '../dto/update-bus.dto';
import { BusEntity } from '../entities/bus.entity';

@Injectable()
export class BusRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createBusDto: CreateBusDto): Promise<BusEntity> {
    return this.prisma.bus.create({
      data: createBusDto,
    });
  }

  async findAll(): Promise<BusEntity[]> {
    return await this.prisma.bus.findMany();
  }

  async findOne(id: number): Promise<BusEntity> {
    return await this.prisma.bus.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateBusDto: UpdateBusDto): Promise<BusEntity> {
    return await this.prisma.bus.update({
      where: {
        id,
      },
      data: updateBusDto,
    });
  }

  async remove(id: number): Promise<BusEntity> {
    return await this.prisma.bus.delete({
      where: {
        id,
      },
    });
  }
}
