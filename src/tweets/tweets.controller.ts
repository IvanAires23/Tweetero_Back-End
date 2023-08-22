import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetDTO } from './dtos/tweet.dtos';

@Controller()
export class TweetsController {
    constructor(private readonly tweetService: TweetsService) { }

    @Get('tweets')
    getTweets(@Query('page') page: number = undefined) {
        if (page && (isNaN(page) || page <= 0)) {
            throw new HttpException(
                'Informe uma pagina valida',
                HttpStatus.BAD_REQUEST)
        }

        return this.tweetService.getTweets(page)
    }

    @Get('tweets/:username')
    getTweetByUsername(@Param('username') username: string) {
        return this.tweetService.getTweetFromUsername(username)
    }

    @Post('tweets')
    createTweet(@Body() body: TweetDTO) {
        try {
            this.tweetService.create(body)
        } catch (err) {
            throw new HttpException(err.message, HttpStatus.UNAUTHORIZED)
        }
    }
}
