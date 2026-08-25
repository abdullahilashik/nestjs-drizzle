import { text } from "drizzle-orm/pg-core";
import { integer } from "drizzle-orm/pg-core";
import { timestamp } from "drizzle-orm/pg-core";
import { serial } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    slug: text('slug'),
    description: text('description').notNull(),
    createdAt: timestamp('created_at').$defaultFn(() => new Date())
});


export const comments = pgTable('posts', {
    postId: integer('post_id').references(() => posts.id, {onDelete: 'cascade'}),
    comment: text('comment').notNull(),
    createdAt: timestamp('created_at').$defaultFn(() => new Date())
});

export const postGallery = pgTable('pg_galleries', {
    postId: integer('post_id').references(() => posts.id, {onDelete: 'cascade'}),
    imagePath: text('image_path').notNull()
});