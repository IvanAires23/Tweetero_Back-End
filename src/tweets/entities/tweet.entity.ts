import { User } from "../../user/entities/user.entity";

export class Tweet {
    private _user: User;
    private _tweet: string;

    constructor(user: User, tweet: string) {
        this._user = user;
        this._tweet = tweet
    }

    get User() {
        return this._user
    }

    get tweet() {
        return this._tweet
    }
}