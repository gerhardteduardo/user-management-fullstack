import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('users')
export class UsersController {
  private users: CreateUserDto[] = [];

  @Get()
  getUsers() {
    return this.users;
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    this.users.push(body);
    return { message: 'Usuário cadastrado com sucesso!', user: body };
  }
}
