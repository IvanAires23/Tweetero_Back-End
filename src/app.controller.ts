import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService, UsersService } from './app.service';
import { CreateUserDTO } from './DTO/users.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('sign-up')
  createUser(@Body() body: CreateUserDTO) {
    return this.usersService.create(body)
  }
}
