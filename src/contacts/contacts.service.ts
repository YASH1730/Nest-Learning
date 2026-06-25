import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class ContactsService {
  private contacts = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
  ];

  constructor(private readonly loggerService: LoggerService) {}

  listContacts() {
    return this.contacts;
  }
  getContactById(id: number) {
    this.loggerService.logger(`Fetching contact with ID: ${id}`);
    return this.contacts.find((contact) => contact.id === id);
  }
}
