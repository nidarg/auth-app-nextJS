'use server';

import bcrypt from 'bcryptjs';
import * as z from 'zod';
import { RegisterSchema } from '@/schemas';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalide fields' };
  }

  const { name, email, password } = validatedFields.data;
  // hash passwd
  const hashedPassword = await bcrypt.hash(password, 10);
  // verify unique email
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'Email already in use' };
  }
  //  save user to db
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO send verification token email

  return { success: 'Account created' };
};
