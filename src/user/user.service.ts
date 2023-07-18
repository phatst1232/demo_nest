import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  loginDemo(email: string, password: string): { message: string } {
    return 'test' === password
      ? { message: 'Call SUCCESS!' }
      : { message: 'Invalid Password!' };
  }
}
