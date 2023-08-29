import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from './components/Provider'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.className} h-full scroll-smooth antialiased`}>
      <body className='flex h-full flex-col'>
        <Provider>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
