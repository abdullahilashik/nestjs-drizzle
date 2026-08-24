import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ) { }

    // get the users
    @Get('')
    getUsers() {
        return this.userService.getUsers();
    }

    // create user
    @Post('create')
    createUser(dto: { username: string, email: string }) {
        return this.userService.createUser(dto);
    }
}
