import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/login-demo/:email/:password')
  demoLogin(
    @Param('email') email: string,
    @Param('password') password: string,
  ): { message: string } {
    return this.userService.loginDemo(email, password);
  }
}
