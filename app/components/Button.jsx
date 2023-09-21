import Link from 'next/link'
import React from 'react'

const Button = () => {
  return (
    <Link href="#portfolio">
      <button class="group relative h-7 w-24 mt-5 overflow-hidden rounded-sm border border-zinc-700 text-xs font-medium text-slate-200">
        Explore
        <div class="absolute inset-0 h-full w-full scale-0 rounded-sm transition-all duration-300 group-hover:scale-100 group-hover:bg-zinc-500/30"></div>
      </button>
    </Link>
  )
}

export default Button