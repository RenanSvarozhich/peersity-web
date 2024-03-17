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
      <Link href="/" className={linkClass('/', true)} aria-current={ariaCurrent('/', true)}>Home</Link>
      <Link href="/skills" className={linkClass('/skills')} aria-current={ariaCurrent('/skills')}>Skills</Link>
    </>
  );
}
