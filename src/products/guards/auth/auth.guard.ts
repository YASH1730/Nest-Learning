import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean {

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    if (!token) {
      console.log('Reject At Guard');

      return false;
    }

    if (token !== 'Secret Token is 3002') {
      console.log('Reject At Guard');
      return false;
    }

    console.log('Dispatching from Guard');
    return true;
  }
}
