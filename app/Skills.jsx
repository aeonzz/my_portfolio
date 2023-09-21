import Image from 'next/image';
import React from 'react';
import { icons } from './constants/index'

const Skills = () => {
  return (
    <div className='h-auto overflow-visible pb-32'>
      <h2 data-scroll data-scroll-speed="0.05" className='text-3xl font-bold text-center text-slate-200'>Technologies i know.</h2>
      <div data-scroll data-scroll-speed="0.02" className='flex md:justify-between justify-center items-center flex-wrap w-[80%] h-auto gap-10 mt-16 m-auto'>
        {icons.map((icon) => (
          <Image
            key={icon.id}
            src={icon.logo}
            width={50}
            height={50}
            alt='logos'
          />
        ))}
      </div>
    </div>
  )
}

export default Skills