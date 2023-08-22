import { Injectable } from '@nestjs/common';
import { Tweet } from './entities/tweet.entity';
import { TweetDTO } from './dtos/tweet.dtos';
import { UserService } from '../user/user.service';

@Injectable()
export class TweetsService {

    private LIMIT = 15;
    private tweets: Tweet[]

    constructor(private readonly userService: UserService) {
        this.tweets = []
    }

    create(body: TweetDTO) {
        const user = this.userService.findUserByUsername(body.username)
        if (!user) throw new Error('User does not exist!');

        return this.tweets.push(new Tweet(user, body.tweet))
    }

    getTweets(page: number) {
        let tweets: Tweet[] = []
        if (page) {
            const { start, end } = this.calculeteLimitPage(page)
            tweets = this.tweets.slice(start, end)
        } else {
            tweets = this.tweets.slice(-this.LIMIT)
        }
        return this.formatTweet(tweets)
    }

    getTweetFromUsername(username: string) {
        const tweetsUser = this.tweets.filter(t => t.User.username === username)

        return this.formatTweet(tweetsUser)
    }

    private formatTweet(tweets: Tweet[]) {
        return tweets.map(t => {
            const { username, avatar } = t.User
            return {
                username,
                avatar,
                tweet: t.tweet
            }
        })
    }

    private calculeteLimitPage(page: number): { start: any, end: any } {
        return {
            start: (page - 1) * this.LIMIT,
            end: page * this.LIMIT
        }
    }
}
