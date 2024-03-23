'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function NavbarLinks() {
  const pathname = usePathname()

  const linkClass = (path: string, exactMatch = false) => {
    return `text-lg font-medium sm:py-6 ${
      (exactMatch ? pathname == path : pathname.startsWith(path))
        ? "text-orange-500 dark:text-orange-500"
        : "text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
    }`;
  };

  const ariaCurrent = (path: string, exactMatch = false) => {
    return (exactMatch ? pathname == path : pathname.startsWith(path))
      ? 'page' 
      : undefined;
  };

  return (
    <>
      <Link href="/" aria-current={ariaCurrent('/', true)} className={linkClass('/', true)}>Home</Link>
      <Link href="/skills" aria-current={ariaCurrent('/skills')} className={linkClass('/skills')}>Skills</Link> 
      <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover]">
        <button type="button" aria-current={ariaCurrent('/user')} className={"flex items-center w-full " + linkClass('/user')}>
          User
          <svg className="ms-1.5 size-2.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
          </svg>
        </button>

        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
          <Link href="/user/login" aria-current={ariaCurrent('/user/login')} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-lg font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500">
            Log in
          </Link>
        </div>
      </div>
    </>
  );
}
