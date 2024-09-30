import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  create(createUserDto: CreateUserDto) {
    try {
      const user = { id: Date.now(), ...createUserDto };
      this.users.push(user);
      return user;
    } catch (error) {
      return null;
    }
  }

  findByEmail(email: string) {
    return this.users.find(user => user.email === email);
  }

  findAll() {
    return this.users;
  }
}