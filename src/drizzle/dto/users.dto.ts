import { createZodDto } from "nestjs-zod";
import { insertSchema, selectSchema, updateSchema } from "../schema/users.zod";

// create dto
export class CreateUserDto extends createZodDto(insertSchema) { }
// update dto
export class UpdateUserDto extends createZodDto(updateSchema) { }
// select dto
export class SelectUserDto extends createZodDto(selectSchema) { }