import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aeonz',
  description: 'an aspiring Front-end developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 relative md:w-[75%] w-[85%] m-auto overflow-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
