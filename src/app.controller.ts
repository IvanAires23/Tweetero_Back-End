import { Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { AppService, TweetsService, UsersService } from './app.service';
import { CreateUserDTO } from './DTO/users.dto';
import { CreateTweetDTO } from './DTO/tweets.dto';

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

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) { }

  @Post()
  tweetUser(@Body() body: CreateTweetDTO) {
    return this.tweetsService.create(body)
  }

  @Get()
  pagesTweets(@Query('page') page?: number) {
    return this.tweetsService.findTweets(page)
  }

  @Get(':username')
  tweetsUser(@Param('username') username: string) {
    return this.tweetsService.findTweetUser(username)
  }

}
