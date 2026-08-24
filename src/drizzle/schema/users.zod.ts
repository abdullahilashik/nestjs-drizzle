import {
    createInsertSchema,
    createSelectSchema
} from 'drizzle-zod';
import { users } from './users';
import { z } from 'zod';

export const insertSchema = createInsertSchema(users, {
    email: z.string().pipe(z.email({ message: 'Invalid email provided' })),
    password: z.string().min(4, { message: 'Minimum of 4 characters' }).max(32, { message: "maximum of 32 characters required" })
});


// make it partial
export const updateSchema = insertSchema.partial();
// select schema
export const selectSchema = createSelectSchema(users);