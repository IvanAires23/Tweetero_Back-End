import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { User } from "../entities/users.entity";

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    avatar: string;

    toUser() {
        return new User(this.username, this.avatar)
    }
}