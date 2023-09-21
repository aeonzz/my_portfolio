'use client';
import { useEffect } from 'react';
import React from 'react';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';

const Page = () => {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Skills />
    </div>
  )
}

export default Page;