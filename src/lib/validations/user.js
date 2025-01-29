import * as z from "zod";

export const userSchema = z.object({
  firstName: z
    .string()
    .min(1, "At least 1 character required")
    .max(50, "Max 50 characters allowed"),
  lastName: z
    .string()
    .min(1, "At least 1 character required")
    .max(50, "Max 50 characters allowed"),
  email: z.string().email("Invalid email address"),
  department: z.string().min(1, "Department must be at least 1 character"),
});
