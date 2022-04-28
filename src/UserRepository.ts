import { Injectable } from '@nestjs/common';
import { User } from './User';

@Injectable()
export class UserRepository {
  find(userId: string): Promise<User> {
    const name = 'Connor';
    return Promise.resolve(new User(userId, name));
  }
}