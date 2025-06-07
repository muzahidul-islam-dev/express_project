import { z } from "zod";
import { TUser } from "./user.interface";



const UserSchemaValidation = z.object({
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string"
  }).max(20, {
    message: "Password must be less than or equal to 20 characters",
  }).optional()
})

export const userValidation = { UserSchemaValidation };