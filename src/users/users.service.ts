import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers() {
    return [
      { userName: 'Yashwant', age: 25 },
      { userName: 'Harsh', age: 22 },
    ];
  }
}
