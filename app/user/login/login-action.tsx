'use server'

import { set_cookie } from "../cookies";
import { redirect } from 'next/navigation'

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const response = await fetch('http://127.0.0.1:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const token = await response.json();
      set_cookie('token', token);
    } else {
      const { error } = await response.json();
      return { message: error };
    }
  } catch (error) {
    console.error("Sign-in error:", error);
    return { message: 'An error occurred during sign-in. Please try again.' };
  }

  redirect((formData.get('redirectUrl') as string | null) || '/');
}