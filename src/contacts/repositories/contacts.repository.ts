import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContactDTO } from '../dto/create-contact.dto';
import { ContactEntity } from '../entities/contact.entity';

@Injectable()
export class ContactsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createContactDTO: CreateContactDTO): Promise<ContactEntity> {
    return this.prisma.contact.create({
      data: createContactDTO,
    });
  }
}
