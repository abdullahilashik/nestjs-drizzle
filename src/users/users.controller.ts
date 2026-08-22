import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../drizzle/dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    // get the users
    @Get('')
    getUsers() {
        return this.userService.getUsers();
    }

    // create users
    @Post('create')
    createUser(@Body() dto: CreateUserDto) {
        return this.userService.createNewUser(dto);
    }
}
