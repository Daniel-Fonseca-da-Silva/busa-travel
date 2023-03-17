import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { DriverRepository } from './repositories/driver.repository';

@Injectable()
export class DriversService {
  constructor(private readonly driverRepository: DriverRepository) {}

  create(createDriverDto: CreateDriverDto) {
    return this.driverRepository.create(createDriverDto);
  }

  findAll() {
    return this.driverRepository.findAll();
  }

  findOne(id: number) {
    return this.driverRepository.findOne(id);
  }

  findByDocument(document: string) {
    return this.driverRepository.findByDocument(document);
  }

  update(id: number, updateDriverDto: UpdateDriverDto) {
    return this.driverRepository.update(id, updateDriverDto);
  }

  remove(id: number) {
    return this.driverRepository.remove(id);
  }
}
