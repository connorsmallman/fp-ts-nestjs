import { Controller, Get, Param } from '@nestjs/common';
import { GetUserUseCase } from './GetUserUseCase';
import { pipe } from 'fp-ts/function';
import { taskEither as TE } from 'fp-ts';
import { User } from './User';

type UserResponse = {
  name: string;
};

@Controller('users')
export class UserController {
  constructor(private readonly getUserUseCase: GetUserUseCase) {}

  @Get(':id')
  getUser(@Param() params): Promise<UserResponse> {
    return pipe(
      this.getUserUseCase.exec({ userId: params.id }),
      TE.map(
        (user: User): UserResponse => ({
          name: user.name,
        }),
      ),
      TE.getOrElse((error: Error) => {
        throw error;
      }),
    )();
  }
}
