'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { tokens } from '../(assets)/designTokens'

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className={`flex flex-row-reverse justify-between ${tokens.colors.text_gray_2}`}>
      <Link
        className={
          `[&:focus+a]:border-r-0 flex h-12 justify-center items-center basis-1/4 ${tokens.colors.border_white}
          ${pathname === '/equipment' ? (
            `${tokens.colors.text_violet} rounded-tl-lg border-l-2`
          ) : (
            "border-b-2"
          )}`
        }
        href="/equipment">
        Набір екіпірування
      </Link>
      
      <Link
        className={
          `[&:focus+a]:border-r-0 flex h-12 justify-center items-center basis-1/4 ${tokens.colors.border_white}
          ${pathname === '/staff' ? (
            `${tokens.colors.text_violet} rounded-t-lg border-r-2 border-l-2`
          ) : (
            "rounded-tr-lg border-b-2 border-r-2"
          )}`
        }
        href="/staff"
      >
        Список персоналу
      </Link>

      <Link
        className={
          `[&:focus+a]:border-r-0 flex h-12 justify-center items-center w-1/4 ${tokens.colors.border_white}
          ${pathname === '/' ? (
            `${tokens.colors.text_violet} w-[calc(25%+12px)] rounded-t-lg border-r-2 border-l-2`
          ) : (
            "rounded-tr-lg border-b-2 border-r-2"
          )}`
        }
        href="/"
      >
        Посада
      </Link>
      
      <Link
        className={
          `flex h-12 justify-center items-center basis-1/4 ${tokens.colors.border_white}
          ${pathname === '/hierarchy' ? (
            `${tokens.colors.text_violet} rounded-tr-lg border-r-2`
          ) : (
            "rounded-tr-lg border-b-2 border-r-2"
          )}`
        }
        href="/hierarchy"
      >
        Ієрархія
      </Link>
    </nav>
  )
}

export default Nav