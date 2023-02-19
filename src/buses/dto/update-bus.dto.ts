import { PartialType } from '@nestjs/mapped-types';
import { CreateBusDto } from './create-bus.dto';

export class UpdateBusDto extends PartialType(CreateBusDto) {}
