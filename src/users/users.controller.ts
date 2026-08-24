import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, SelectUserDto } from 'src/drizzle/dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get('')
    getUser() {
        const users = this.userService.getUsers();
        return users;
    }

    @Post('create')
    createUser(@Body() user: CreateUserDto) {
        return this.userService.createUser(user);
    }
}
