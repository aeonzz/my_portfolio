import { projects } from './constants/index'
import ProjectCard from './components/ProjectCard'

const Portfolio = () => {
  return (
    <section id='portfolio' className='h-auto md:py-60 py-32 relative overflow-visible'>
      <div className='absolute -left-[20%] top-16 h-[700px] w-[400px] bg-zinc-900'></div>
      <div className='absolute -right-[20%] -z-10 -top-10 h-[250px] w-[300px] bg-zinc-800 bg-zinc'></div>
      <div data-scroll data-scroll-speed="-0.05" className='absolute -right-[5%] -z-20 top-16 h-[200px] w-[250px] bg-zinc-900 bg-zinc bo'></div>
      <h2 data-scroll data-scroll-speed="0.05" className='text-3xl font-bold text-slate-200'>My recent creations.</h2>
      <div data-scroll data-scroll-speed="0.02" className='grid grid-rows-auto md:grid-cols-2 grid-cols-1 gap-6 w-full md:h-[280px] h-[700px] mt-8'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio