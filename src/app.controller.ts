import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService, UsersService } from './app.service';
import { CreateUserDTO } from './DTO/users.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHealth(): string {
    return this.appService.getHealth();
  }
}

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('sign-up')
  @HttpCode(200)
  createUser(@Body() body: CreateUserDTO) {
    return this.usersService.create(body)
  }
}
