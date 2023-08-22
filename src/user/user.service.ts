import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { LoginDTO } from './dtos/login.dto';


@Injectable()
export class UserService {

    private _user: User[];

    constructor() {
        this._user = []
    }

    create(body: LoginDTO) {
        const { avatar, username } = body
        return this._user.push(new User(username, avatar))
    }

    findUser(body: LoginDTO) {
        const { username } = body
        const user = this._user.find(t => t.username === username)
        if (user) return user
        else throw new Error("Cadastre-se primeiro")
    }

    findUserByUsername(username: string) {
        return this._user.find(user => user.username === username)
    }
}
