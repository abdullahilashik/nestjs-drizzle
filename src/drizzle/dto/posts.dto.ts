import { createZodDto } from "nestjs-zod";
import { insertPostsSchema, selectPostsSchema, updatePostsSchema } from "../schema";

export class CreatePostsDto extends createZodDto(insertPostsSchema) {}

export class UpdatePostsDto extends createZodDto(updatePostsSchema) {}

export class SelectPostsDto extends createZodDto(selectPostsSchema) {}