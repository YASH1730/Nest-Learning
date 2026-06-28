import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch()
export class CustomerFilterFilter<T> implements ExceptionFilter  {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const status  = exception.getStatus();
    response.status(status).json({
      statusCode : status,
      message: exception.message,
      timestamp: new Date().toISOString(),
    });
  }
}
