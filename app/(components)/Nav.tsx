'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { tokens } from '../(assets)/designTokens'

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className={`flex flex-row justify-between ${tokens.colors.text_gray_2}`}>
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
        Иерархия
      </Link>
      <Link
        className={
          `flex h-12 justify-center items-center basis-1/4 ${tokens.colors.border_white}
          ${pathname === '/' ? (
            `${tokens.colors.text_violet} rounded-t-lg border-r-2 border-l-2`
          ) : (
            "rounded-tr-lg border-b-2 border-r-2"
          )}`
        }
        href="/"
      >
        Должности
      </Link>
      <Link
        className={
          `flex h-12 justify-center items-center basis-1/4 ${tokens.colors.border_white}
          ${pathname === '/staff' ? (
            `${tokens.colors.text_violet} rounded-t-lg border-r-2 border-l-2`
          ) : (
            "rounded-tr-lg border-b-2 border-r-2"
          )}`
        }
        href="/staff"
      >
        Список персонала
      </Link>
      <Link
        className={
          `flex h-12 justify-center items-center basis-1/4 ${tokens.colors.border_white}
          ${pathname === '/equipment' ? (
            `${tokens.colors.text_violet} rounded-tl-lg border-l-2`
          ) : (
            "border-b-2"
          )}`
        }
        href="/equipment">
        Наборы экипировки
      </Link>

    </nav>
  )
}

export default Nav