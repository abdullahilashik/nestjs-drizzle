import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, SelectUserDto, UpdateUserDto } from 'src/drizzle/dto';

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

    @Patch('update')
    async updatePassword(@Body() dto: UpdateUserDto) {
        const counter =  await this.userService.updatePassword(dto);
        return {message: `This is a small token of gift for ya! ${counter} updated rows!`}
    }
}
