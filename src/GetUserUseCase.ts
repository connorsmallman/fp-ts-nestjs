import { Injectable } from '@nestjs/common';
import { taskEither as TE } from 'fp-ts';
import { User } from './User';
import { UserRepository } from './UserRepository';

@Injectable()
export class GetUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  exec(command: { userId: string }): TE.TaskEither<Error, User> {
    return TE.tryCatch(
      () => this.userRepository.find(command.userId),
      (reason) => new Error(String(reason)),
    );
  }
}
