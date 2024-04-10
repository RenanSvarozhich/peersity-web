'use client'
 
import { useFormState, useFormStatus } from 'react-dom'
import { loginAction } from './login-action'
 
const initialState = {
  message: '',
}
 
export default function Signin() {
  const [state, formAction] = useFormState(loginAction, initialState)
 
  return (
    <>
      <div className="w-full max-w-md mx-auto p-6 mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
          </div>

          <form action={formAction} className="flex flex-col p-4 max-w-md mx-auto mt-10 space-y-4">
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
        </div>
      </div>
    </>
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