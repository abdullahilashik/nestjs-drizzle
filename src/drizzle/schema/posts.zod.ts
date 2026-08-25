import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { comments, posts } from "./posts";
import {z} from 'zod';

export const insertPostsSchema = createInsertSchema(posts, {
    title: z.string().min(4, {message: 'Title should not be less than 4 character '}),
    description: z.string().max(2000, {message: 'maximum 2k characters allowed'})
});


export const updatePostsSchema = insertPostsSchema.partial();
export const selectPostsSchema = createSelectSchema(posts);


// comments validation
export const insertCommentsSchema = createInsertSchema(comments, {
    postId: z.number(),
    comment: z.string()
});