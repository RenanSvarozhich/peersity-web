'use client'
 
import { useFormState, useFormStatus } from 'react-dom'
import { signinAction } from './signin-action'
 
const initialState = {
  message: '',
}
 
export default function Signin() {
  const [state, formAction] = useFormState(signinAction, initialState)
 
  return (
    <form action={formAction} className="flex flex-col p-4 max-w-md mx-auto mt-10 space-y-4 bg-white shadow-md rounded-lg">
      <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="text-red-500 text-sm mt-2">{state?.message}</div>
        <LoginButton />
    </form>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()
 
  return (
    <button 
      aria-disabled={pending} 
      type="submit"
      className={`px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline disabled:bg-blue-300 ${pending ? 'cursor-wait' : 'cursor-pointer'}`}
    >
      Login
    </button>
  )
}