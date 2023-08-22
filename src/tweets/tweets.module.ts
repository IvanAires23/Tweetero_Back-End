import { Module } from '@nestjs/common';
import { TweetsController } from './tweets.controller';
import { TweetsService } from './tweets.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [TweetsController],
  providers: [TweetsService]
})
export class TweetsModule { }
