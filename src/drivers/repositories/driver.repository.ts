import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDriverDto } from '../dto/create-driver.dto';
import { UpdateDriverDto } from '../dto/update-driver.dto';
import { DriverEntity } from '../entities/driver.entity';

@Injectable()
export class DriverRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(createDriverDto: CreateDriverDto): Promise<DriverEntity> {
    return this.prisma.driver.create({
      data: createDriverDto,
    });
  }

  async findAll(): Promise<DriverEntity[]> {
    return this.prisma.driver.findMany();
  }

  async findOne(id: number): Promise<DriverEntity> {
    return await this.prisma.driver.findUnique({
      where: {
        id,
      },
    });
  }

  async findByDocument(document: string): Promise<DriverEntity> {
    return await this.prisma.driver.findUnique({
      where: {
        document,
      },
    });
  }

  async update(
    id: number,
    updateDriverDto: UpdateDriverDto,
  ): Promise<DriverEntity> {
    return await this.prisma.driver.update({
      where: {
        id,
      },
      data: updateDriverDto,
    });
  }

  async remove(id: number): Promise<DriverEntity> {
    return await this.prisma.driver.delete({
      where: {
        id,
      },
    });
  }
}
