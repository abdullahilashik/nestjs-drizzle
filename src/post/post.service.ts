import { Injectable, Inject } from '@nestjs/common';
import { LibSQLDatabase } from 'drizzle-orm/libsql';
import { DRIZZLE } from '../drizzle/providers';
import * as schema from '../drizzle/schema'
import { CreatePostDto, UpdatePostDto } from '../drizzle/dto';

@Injectable()
export class PostService {

    constructor(
        @Inject(DRIZZLE) private readonly db: LibSQLDatabase<typeof schema>
    ) { }

    // create a new post
    async createPost(post: CreatePostDto) {
        const [posts] = await this.db.insert(schema.postsTable)
            .values(post)
            .returning();
        return posts;
    }
    // get all posts
    async getAllPosts() {
        return await this.db.query.postsTable.findMany();
    }
    // get a post by id
    async getPostById(postId: number) {

    }
    // update post by id
    async updatePost(postId: number, post: UpdatePostDto) { }

    // delete post by id
    async deletePost(postId: number) { }
}
