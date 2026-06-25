import { Controller, Get, Param } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  listContacts() {
    return this.contactsService.listContacts();
  }

  @Get(':id')
  getContactById(@Param() params: { id: string }) {
    console.log('Received ID:', params.id); // Log the received ID for debugging
    return this.contactsService.getContactById(parseInt(params.id));
  }
}
