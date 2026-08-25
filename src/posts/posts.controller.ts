import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostsDto } from 'src/drizzle/dto/posts.dto';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postService: PostsService
    ) {}

    // get posts
    @Get('')
    getPosts() {
        return this.postService.getPosts();
    }
    // create post
    @Post('create')
    createPost(@Body() dto: CreatePostsDto) {
        return this.postService.createPosts(dto);
    }
}
