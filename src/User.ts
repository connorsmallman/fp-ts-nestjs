export class User {
  name: string;
  userId: string;

  constructor(userId: string, name: string) {
    this.userId = userId;
    this.name = name;
  }
}
