import { createSelectSchema } from "drizzle-zod";
import { postsTable } from "../schema";
import z from "zod";
import { createZodDto } from "nestjs-zod";

export const insertPostSchema = createSelectSchema(postsTable, {
    title: z.string().min(5, { message: 'Minimum of 5 characters required' }).max(250, { message: 'Maximum 250 characetrs allowed' }),
    description: z.string().min(5, { message: 'minimum of 5 characers required' })
});

// create insert schema
export const createPostSchema = insertPostSchema.omit({
    id: true,
});

// create update shema
export const updatePostSchema = createPostSchema.partial();

// create select schema

export const selectPostSchema = createSelectSchema(postsTable);

// now create the dtos

export class CreatePostDto extends createZodDto(createPostSchema) { }
export class UpdatePostDto extends createZodDto(updatePostSchema) { }
export class SelectPostDto extends createZodDto(selectPostSchema) { }