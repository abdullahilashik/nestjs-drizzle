import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DRIZZLE } from 'src/drizzle/drizzle.provider';
import * as schema from '../drizzle/schema';
import { CreateUserDto, SelectUserDto, UpdateUserDto } from 'src/drizzle/dto';
import { and, eq, sql } from 'drizzle-orm';

@Injectable()
export class UsersService {
    constructor(
        @Inject(DRIZZLE)
        private readonly db: NodePgDatabase<typeof schema>
    ) { }

    // get users
    getUsers() {
        return this.db.select().from(schema.users);
    }

    // get user by id
    async getUserById(id: UpdateUserDto) {

    }

    // create a new user
    async createUser(dto: CreateUserDto) {        

        const [users] = await this.db
            .insert(schema.users)
            .values(dto)
            .onConflictDoUpdate({
                target: schema.users.email,
                set: {password: dto.password}
            })
            .returning();
        return users;
    }

    // update user name
    async updatePassword(dto: UpdateUserDto) {
        
        if(!dto.email) throw new Error('Email can not be left empty');

        const updatedData = await this.db
         .update(schema.users)
         .set({password: sql`${dto.password}`})
         .where(eq(schema.users.email, dto.email!));
        
        return updatedData.rowCount;
    }
}
