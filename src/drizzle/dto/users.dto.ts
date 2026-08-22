// src/users/dto/user.dto.ts
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { userTable } from '../schema'; // adjust import path as needed

// Base insert schema with custom Zod validation overrides
export const insertUserSchema = createInsertSchema(userTable, {
    email: (schema) => schema.email('Invalid email address format'),
    firstName: (schema) => schema.min(1, 'First name is required').max(50),
    lastName: (schema) => schema.max(50).optional(),
    userName: (schema) => schema.min(3, 'Username must be at least 3 characters').max(50),
});

// Create DTO (omit auto-incremented primary key)
export const createUserSchema = insertUserSchema.omit({
    id: true,
});

// Update DTO (make all creation fields optional)
export const updateUserSchema = createUserSchema.partial();

// Select / Response Schema
export const selectUserSchema = createSelectSchema(userTable);

// NestJS DTO Classes
export class CreateUserDto extends createZodDto(createUserSchema) { }
export class UpdateUserDto extends createZodDto(updateUserSchema) { }
export class UserResponseDto extends createZodDto(selectUserSchema) { }

// TypeScript Types (if needed directly in services/interfaces)
export type User = z.infer<typeof selectUserSchema>;
export type NewUser = z.infer<typeof createUserSchema>;