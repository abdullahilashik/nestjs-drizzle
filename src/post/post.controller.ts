import { Body, Controller, Post, Get } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from '../drizzle/dto';

@Controller('post')
export class PostController {
    constructor(
        private readonly postService: PostService
    ) { }

    // create a new post
    @Post('')
    createPost(@Body() post: CreatePostDto) {
        return this.postService.createPost(post);
    }

    // get all posts
    @Get('')
    getAllPosts() {
        return this.postService.getAllPosts();
    }
}
