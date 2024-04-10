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

  const userLinkClass = (path: string, exactMatch = false) => {
    return `text-lg font-medium gap-x-2 sm:my-6 sm:ps-6 sm:border-s flex items-center ${
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
      <Link href="/user/login" aria-current={ariaCurrent('/user/login')} className={userLinkClass('/user/login')}>
        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        </svg>
        Log in
      </Link>
    </>
  );
}
