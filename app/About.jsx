import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="h-auto flex lg:flex-row flex-col items-center">
      <div className='flex-1 flex justify-start items-center'>
        <div className='h-[250px] w-[250px] border border-zinc-700 flex justify-center rounded-full lg:ml-10 lg:mb-0 mb-10'>
          <Image
            width={400}
            height={400}
            src='/pfp.jpg'
            className='object-cover rounded-full'
            alt='christian caneos'
          />
        </div>
      </div>
      <div className='flex flex-1 flex-col lg:items-start items-center'>
        <h2 data-scroll data-scroll-speed="0.07" className='text-4xl font-bold text-slate-200'>About me.</h2>
        <p data-scroll data-scroll-speed="0.05" className='mt-5 text-sm text-slate-200 lg:text-left text-center'>Hello, I m <span className='font-black text-indigo-800'>Christian Caneos</span>, and I m passionate about the dynamic world of frontend development. My journey into this exciting field began with a deep-rooted curiosity for technology and a desire to create user-centric digital experiences.</p>
        <p data-scroll data-scroll-speed="0.03" className='mt-5 text-sm text-slate-200 lg:text-left text-center'>I am dedicated to staying up-to-date with the ever-evolving tech landscape, constantly honing my skills in HTML, CSS, JavaScript, and various frontend frameworks. My goal is to create web experiences that not only meet industry standards but set new benchmarks in innovation and interactivity.</p>
      </div>
    </section>
  )
}

export default About