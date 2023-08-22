import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): string {
    return "I'm okay!";
  }
}
