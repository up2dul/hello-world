import { z } from 'zod';

// TODO: priority of the error messages
export const loginSchema = z
  .object({
    email: z
      .string({ required_error: 'Email is required' })
      .email('Email is invalid'),
    password: z
      .string({ required_error: 'Password is required' })
      .min(8, 'Password must be at least 8 characters long'),
  })
  .required();

export type LoginSchema = z.infer<typeof loginSchema>;
