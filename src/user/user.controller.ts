import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDTO } from './dtos/login.dto';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post('sign-up')
    @HttpCode(HttpStatus.OK)
    createUser(@Body() body: LoginDTO) {
        return this.userService.create(body)
    }

    @Get('sign-in')
    @HttpCode(HttpStatus.OK)
    loginUser(@Body() body: LoginDTO) {
        return this.userService.findUser(body)
    }
}
