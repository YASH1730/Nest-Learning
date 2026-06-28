import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Called Before the Middleware');
    console.log(`${req.method} ${req.url} ${ new Date().toISOString()}`);
    next();
  }
}
