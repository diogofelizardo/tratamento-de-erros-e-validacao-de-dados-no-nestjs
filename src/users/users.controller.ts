import { Controller, Post, Body, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    // Verifica se o email já está em uso
    const existingUser = await this.usersService.findByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException('Email já está em uso.');
    }

    const user = await this.usersService.create(createUserDto);
    if (!user) {
      throw new BadRequestException('Usuário não criado.');
    }
    return user;
  }
}