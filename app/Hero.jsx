import Image from "next/image"
import Button from './components/Button'

const Hero = () => {
  return (
    <div className='relative h-screen flex justify-center items-center overflow-visible'>
      <div className="absolute -bottom-32 -z-10 h-[600px] w-[200px] bg-zinc-900"></div>
      <div className='h-[60%] w-full flex justify-between items-center'>
        <div className='flex flex-col flex-1 sm:justify-start justify-center sm:items-start items-center'>
          <h1 data-scroll data-scroll-speed="0.05" className='text-1xl font-semibold text-slate-200'>HI!👋I m Christian Caneos.</h1>
          <p data-scroll data-scroll-speed="0.02" className='sm:text-left text-center mt-4 leading-2 text-2xl font-black text-slate-200'>Aspiring <span className='text-indigo-800'>frontend developer</span>, enthusiastic about learning and passionate about creating exceptional user experiences.</p>
          <Button />
        </div>
        <div className='h-full w-36 flex-1 lg:flex hidden justify-center items-center'>
          <Image
            data-scroll data-scroll-speed="0.1"
            width={350}
            height={350}
            src='/hero.svg'
            alt='hero svg'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero