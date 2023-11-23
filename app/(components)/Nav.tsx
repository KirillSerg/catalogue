'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { tokens } from '../(assets)/designTokens'

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className={`flex flex-row justify-between ${tokens.colors.text_gray_2}`}>
      <Link
        className={`flex h-12 justify-center ${pathname === '/hierarchy' && tokens.colors.text_violet} items-center basis-1/4 border border-white`}
        href="/hierarchy"
      >
        Иерархия
      </Link>
      <Link
        className={`flex h-12 justify-center ${pathname === '/' && tokens.colors.text_violet} items-center basis-1/4 border border-white`}
        href="/"
      >
        Должности
      </Link>
      <Link
        className={`flex h-12 justify-center ${pathname === '/staff' && tokens.colors.text_violet} items-center basis-1/4 border border-white`}
        href="/staff"
      >
        Список персонала
      </Link>
      <Link
        className={`flex h-12 justify-center ${pathname === '/equipment' && tokens.colors.text_violet} items-center basis-1/4 border border-white`}
        href="/equipment">
        Наборы экипировки
      </Link>

    </nav>
  )
}

export default Nav