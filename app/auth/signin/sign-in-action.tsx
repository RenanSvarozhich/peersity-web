'use server'
 
import { cookies } from 'next/headers'
 
export async function signInAction(_currentState: unknown, formData: FormData) {
  try {
    await signIn(formData)
    await handleLogin({ email: formData.get('email') })
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}
 
async function handleLogin(sessionData: { email: string }) {
  const encryptedSessionData = 'x';//encrypt(sessionData) // Encrypt your session data
  cookies().set('session', encryptedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  })
  // Redirect or handle the response after setting the cookie
}

async function signIn(formData: FormData) {
  try {
    const email = formData.get('email');
    const password = formData.get('password');

    //const response = await axios.post('/api/auth/signin', { email, password });

    if (response.data.success) {
      // Update your application's state here
      console.log('Signed in successfully');
      return response.data;
    } else {
      console.log('Failed to sign in');
      throw new Error('Failed to sign in');
    }
  } catch (error) {
    console.error('An error occurred while signing in:', error);
    throw error;
  }
}