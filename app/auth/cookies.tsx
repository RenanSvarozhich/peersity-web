import { cookies } from 'next/headers';
import { encrypt } from './encryption';

export function set_cookie(key: string, value: string) {
  const encryptedValue = encrypt(value);

  cookies().set(key, encryptedValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  });
}
