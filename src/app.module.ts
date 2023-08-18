import { Module } from '@nestjs/common';
import { AppController, TweetsController, UsersController } from './app.controller';
import { AppService, TweetsService, UsersService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, TweetsController],
  providers: [AppService, UsersService, TweetsService],
})
export class AppModule { }
