'use server'

import { set_cookie } from "../cookies";
import { redirect } from 'next/navigation'

export async function signinAction(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const redirectUrl = (formData.get('redirectUrl') as string | null) || '/';

  const response = await mockFetchSignin(email, password);  
  
  if (response.ok) {
    const { token } = await response.json();
    set_cookie('token', token);
    redirect(redirectUrl);    
  } else {
    const { error } = await response.json();
    return { message: error };
  }
}

async function mockFetchSignin(email: string, password: string) {
  return new Promise<Response>((resolve) => {
    setTimeout(() => {
      if (email === 'test@test.com' && password === '123') {
        resolve({
          ok: true,
          json: () => Promise.resolve({ token: 'xxxxxxxxxxxxxxxxx'}),
        } as Response);
      } else {
        resolve({
          ok: false,
          json: () => Promise.resolve({ error: 'Invalid email or password' }),
        } as Response);
      }
    }, 1000);
  });
};