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
  title: 'RideEasy | Bike & Scooter Rental',
  description: 'Bike & Scooter Rental',
  icons: {
    icon: '/app-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="cVxgSbwIF1EFnQkz6O2sd_gNVO8dskUUoYSfwaEQWPE"
        />
      </head>
      <body className={`${caveat.variable} ${kumbh.variable}`}>
        <StoreProvider>
          
          {children}
          
          </StoreProvider>
      </body>
    </html>
  )
}
