import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  providers: [ContactsService, LoggerService],
  exports: [ContactsService],
  imports: [],
})
export class ContactsModule {}
