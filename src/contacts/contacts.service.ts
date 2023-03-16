import { Injectable } from '@nestjs/common';
import { CreateContactDTO } from './dto/create-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private readonly contactsRepository: ContactsRepository) {}

  create(createContactDTO: CreateContactDTO) {
    this.contactsRepository.create(createContactDTO);
  }
}
