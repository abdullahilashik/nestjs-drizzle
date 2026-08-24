import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from 'src/drizzle/drizzle.provider';
import { NodePgDatabase } from 'drizzle-orm/node-postgres'; // or postgres-js type
import * as schema from '../drizzle/schema';

@Injectable()
export class UsersService {
    constructor(
        @Inject(DRIZZLE)
        private readonly db: NodePgDatabase<typeof schema>
    ) { }

    // get all users
    async getUsers() {
        return await this.db.select().from(schema.users);
    }

    // create user
    async createUser(dto: { username: string, email: string }) {
        const [users] = await this.db.insert(schema.users).values(dto).returning();
        return users;
    }
}
