
export class Tweet {
    private username: string;
    private avatar: string;
    private tweet: string;

    constructor(username: string, avatar: string, tweet: string) {
        this.tweet = tweet;
        this.username = username;
        this.avatar = avatar
    }
}