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
      <body className={`${inter.className} bg-zinc-950 relative`}>
        <div className='relative 2xl:w-[65%] md:w-[75%] w-[85%] m-auto'>
          <Navbar />
          {children}
          <Footer />

        </div>
      </body>
    </html>
  )
}
