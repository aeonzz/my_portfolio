'use client'
import Image from "next/image"
import Link from "next/link"
import github from './assets/github.svg'

const Navbar = () => {
  return (
    <header>
      <nav data-scroll data-scroll-speed="0.1" className="w-full pt-8 flex justify-between absolute top-0 z-50">
        <Link href="/">
          <Image
            width={40}
            height={40}
            src='/union.svg'
            alt="Aeonz"
          />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/aeonzz ">
          <Image
            src={github}
            width={25}
            height={25}
            alt="github"
          />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar