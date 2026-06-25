import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  logger(message: string) {
    console.log(message);
  }
}
