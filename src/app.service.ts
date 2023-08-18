import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO } from './DTO/users.dto';
import User from "./entities/users.entity"
import { Tweet } from './entities/tweets.entity';
import { CreateTweetDTO } from './DTO/tweets.dto';

@Injectable()
export class AppService {
  getHealth(): string {
    return "I'm okay!";
  }
}

@Injectable()
export class UsersService {

  private _users: User[] = [];

  constructor() { }

  findUser() {
    if (this._users.length <= 0) {
      throw {
        "statusCode": 401,
        "message": "Primeiro se cadastre"
      }
    } else {
      return this._users
    }
  }

  get user() {
    return this._users
  }

  create(userDTO: CreateUserDTO) {
    const { avatar, username } = userDTO
    return this._users.push(new User(username, avatar))
  }
}

@Injectable()
export class TweetsService {
  private allTweets = []
  private last15Tweets = []
  private lstUsers = []
  private user: boolean = false;
  private tweetsUsers: Tweet[];

  constructor(private readonly usersService: UsersService) { }

  create(tweetDTO: CreateTweetDTO) {
    const { username, tweet } = tweetDTO
    this.lstUsers = this.usersService.user
    for (let i = 0; i < this.lstUsers.length; i++) {
      if (this.lstUsers[i].username === username) {
        this.user = true
        return this.allTweets.push(new Tweet(username, this.lstUsers[i].avatar, tweet))
      }
    }
    if (!this.user) {
      throw new UnauthorizedException()
    }
  }

  findTweets(page: number) {
    const number = Number(page)
    if (page && isNaN(number) || page <= 0) {
      throw new BadRequestException()
    }
    page = page >= 1 ? page : 1

    const limit = 15
    const start = (page - 1) * limit
    const end = page * limit

    this.last15Tweets = this.allTweets.slice(start, end)
    return this.last15Tweets.slice(-15)
  }

  findTweetUser(username: string) {
    this.tweetsUsers = this.allTweets.filter(t => t.username.includes(username))
    return this.tweetsUsers
  }

}
