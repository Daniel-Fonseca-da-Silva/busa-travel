import { Body, Controller, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDTO } from './dto/create-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactService: ContactsService) {}
  @Post()
  create(@Body() createContactDTO: CreateContactDTO) {
    return this.contactService.create(createContactDTO);
  }
}
