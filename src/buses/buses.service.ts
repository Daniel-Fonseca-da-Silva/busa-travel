import { Injectable } from '@nestjs/common';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';
import { BusRepository } from './repositories/bus.repository';

@Injectable()
export class BusesService {
  constructor(private readonly busRepository: BusRepository) {}

  create(createBusDto: CreateBusDto) {
    return this.busRepository.create(createBusDto);
  }

  findAll() {
    return this.busRepository.findAll();
  }

  findOne(id: number) {
    return this.busRepository.findOne(id);
  }

  update(id: number, updateBusDto: UpdateBusDto) {
    return this.busRepository.update(id, updateBusDto);
  }

  remove(id: number) {
    return this.busRepository.remove(id);
  }
}
