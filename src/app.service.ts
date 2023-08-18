import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './DTO/users.dto';
import { User } from './entities/users.entity';

@Injectable()
export class AppService {
  getHealth(): string {
    return "I'm okay!";
  }
}

@Injectable()
export class UsersService {

  private users = []

  constructor() { }

  create(userDTO: CreateUserDTO) {
    return this.users.push(userDTO.toUser)
  }
}
