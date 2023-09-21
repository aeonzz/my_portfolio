import Image from 'next/image'
import link from '../assets/link.svg'
import Link from 'next/link'

const ProjectCard = ({ imgUrl, name, desc, linkUrl, type, tools }) => {
  return (
    <div className='relative flex flex-col rounded-md border border-zinc-800 overflow-hidden hover:-translate-y-1 ease-out duration-500 group'>
      <div className='relative h-full overflow-hidden'>
        <Image
          fill
          className='object-cover object-top group-hover:scale-[1.01] duration-500'
          src={imgUrl}
          alt='projects'
        />
      </div>
      <div className='flex justify-end items-start flex-col p-5 md:opacity-0 absolute h-full w-full bg-gradient-to-t from-zinc-950 transition duration-200 group-hover:opacity-100 ease-out rounded-md'>
        <h3 className='inline-flex gap-2 items-center font-semibold text-lg text-slate-100'>
          {name}
          <span>
            <Link
              href={linkUrl}
              target='_blank'>
              <Image
                src={link}
                width={18}
                height={18}
                alt='open link button'
              />
            </Link>
          </span>
        </h3>
        <h6 className='font-semibold text-sm text-neutral-300'>{type}</h6>
        <p className='text-xs text-neutral-400 mt-1'>{desc}</p>
        {tools && tools.length > 0 && (
          <div className='flex gap-2 mt-2'>
            {tools.map((tool, index) => (
              <Image
                key={index}
                src={tool.tool}
                width={30}
                height={30}
                alt='technologies'
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard