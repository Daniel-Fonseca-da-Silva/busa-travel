import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { ContactsRepository } from './repositories/contacts.repository';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService, PrismaService, ContactsRepository],
})
export class ContactsModule {}
