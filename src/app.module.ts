import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [UserModule, TweetsModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
