import { randomBytes, createCipheriv } from 'crypto';

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

export function encrypt(value: string) {
  if (!ENCRYPTION_KEY || Buffer.from(ENCRYPTION_KEY).length !== 32) {
    throw new Error('ENCRYPTION_KEY must be defined in your environment and be 32 bytes for AES-256');
  }

  const initializationVector = randomBytes(16);

  const cipher = createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), initializationVector);
  let encrypted = cipher.update(value, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return `${initializationVector.toString('hex')}:${encrypted}`;
}
