import { Module } from '@nestjs/common';
import { UserController } from './UserController';
import { GetUserUseCase } from './GetUserUseCase';
import { UserRepository } from './UserRepository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [GetUserUseCase, UserRepository],
})
export class UserModule {}
