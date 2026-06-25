import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class GreetService {
  constructor(private loggerService: LoggerService) {}

  greet(name: string): string {
    this.loggerService.logger(`Greeting ${name}`);
    return `Hello, ${name}!`;
  }
}
