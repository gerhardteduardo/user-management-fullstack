import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

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
  @Get()
  getUsers() {
    return [{ id: 1, name: 'Eduardo' }, { id: 2, name: 'Jorge' }, { id: 3, name: 'Thiago' }];
  }
}