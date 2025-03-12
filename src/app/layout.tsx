import type { Metadata } from 'next'
import { Caveat, Kumbh_Sans } from 'next/font/google'
import { StoreProvider } from '@/shared/providers/store-provider'
import './globals.scss'

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const kumbh = Kumbh_Sans({
  variable: '--font-Kumbh_Sans',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${kumbh.variable}`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
