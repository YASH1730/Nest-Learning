import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    console.log('Called Before the Handler');
    const start = Date.now();
    return next.handle().pipe(
      // map is for transforming the data
      map((data)=>{
      const response = context.switchToHttp().getResponse();
      response.body = { 
        data,
        message: 'Request processed successfully',
        timestamp: new Date().toISOString(),
        statusCode: response.statusCode,
      };
      return response.body;
    }),
    // tap is for side effects like logging, error handling, etc.
      tap(()=>{
        const responseTime = Date.now() - start;
        console.log(`Response time: ${responseTime}ms`);
        console.log('Called After the Handler');
      })
    );
  }
}
