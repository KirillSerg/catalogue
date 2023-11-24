import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './(components)/Nav'
import { tokens } from './(assets)/designTokens'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Catalogue',
  description: 'Generated by Kyrylo Serhiienko',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main
          className={
            `w-[1034px] h-[836px] pt-6 pb-5 px-6 rounded-lg border-2
            ${tokens.colors.border_white} ${tokens.colors.bg_black_1}`
          }
        >
          <div className={`w-full h-full rounded-lg border-2 ${tokens.colors.border_white}`}>
            <Nav />
            <div className='w-full h-full pt-7 px-10 pb-10'>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
