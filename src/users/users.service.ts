import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { LibSQLDatabase } from 'drizzle-orm/libsql';
import { DRIZZLE } from '../drizzle/providers';
import * as schema from '../drizzle/schema';
import { CreateUserDto, UpdateUserDto } from '../drizzle/dto/users.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsersService {
    constructor(
        @Inject(DRIZZLE)
        private readonly db: LibSQLDatabase<typeof schema>
    ) { }

    // get all users
    async getUsers() {
        return await this.db.query.userTable.findMany();
    }
    // create new user   
    async createNewUser(user: CreateUserDto) {
        const [users] = await this.db.insert(schema.userTable).values(user).returning();
        return users;
    }

    // update existing user
    async update(id: number, dto: UpdateUserDto) {
        const [updatedUser] = await this.db
            .update(schema.userTable)
            .set(dto)
            .where(eq(schema.userTable.id, id))
            .returning();

        if (!updatedUser) {
            throw new NotFoundException('User with the id was not found');
        }
        return updatedUser;
    }
}
