export class User {
    private _username: string;
    private _avatar: string;

    constructor(username: string, avatar: string) {
        this._avatar = avatar;
        this._username = username
    }

    get username() {
        return this._username
    }

    get avatar() {
        return this._avatar
    }
}