import { z } from 'zod';

export const formSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name cannot exceed 50 characters." }),
  
  birthdate: z.date({
    required_error: "Please select a date of birth.",
  }),
  
  department: z.string({
    required_error: "Please select a department.",
  }),
  
  preference: z.enum(["yes", "no", "maybe"], {
    required_error: "Please select your notification preference.",
  }),
});