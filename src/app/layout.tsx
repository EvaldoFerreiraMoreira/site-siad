import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import FixedBar from '@/components/ui/FixedBar'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500'
})

export const metadata: Metadata = {
  title: 'Siad Sistemas',
  description: 'Siad systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
        <FixedBar />
      </body>
    </html>
  )
}
