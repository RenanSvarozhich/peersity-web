'use client'
 
import { signInAction } from './sign-in-action'
import { useFormState, useFormStatus } from 'react-dom'
 
export default function SignIn() {
  const [errorMessage, dispatch] = useFormState(signInAction, undefined)
 
  return (
    <form action={dispatch}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <LoginButton />
    </form>
  )
}
 
function LoginButton() {
  const { pending } = useFormStatus()
 
  return (
    <button aria-disabled={pending} type="submit">
      Login
    </button>
  )
}