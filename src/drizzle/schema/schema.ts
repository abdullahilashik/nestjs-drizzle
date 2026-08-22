import { sqliteTable, numeric, text, integer } from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    firstName: text('first_name', { length: 50, mode: 'text' }).notNull(),
    lastName: text('last_name', { length: 50, mode: 'text' }),
    userName: text('username', { length: 50, mode: 'text' }).notNull(),
    email: text('email', { length: 50, mode: 'text' }).notNull()
});


export const postsTable = sqliteTable('posts', {
    id: integer('id').primaryKey(),
    title: text('title', { length: 250 }).notNull(),
    description: text('description', { length: 2000 }).notNull()
});