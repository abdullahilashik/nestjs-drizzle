import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DRIZZLE } from 'src/drizzle/drizzle.provider';
import { CreatePostsDto } from 'src/drizzle/dto/posts.dto';
import { posts as postsTable, users } from 'src/drizzle/schema';

@Injectable()
export class PostsService {
    constructor(
        @Inject(DRIZZLE) private readonly db: NodePgDatabase
    ) {}


    // get the database
    async getPosts() {
        return await this.db.select().from(postsTable);
    }

    // craete posts
    async createPosts(dto: CreatePostsDto) {
        const [posts] = await this.db.insert(postsTable).values(dto).returning();
        return posts;
    }
}
