import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  image?: string
  title?: string
  topics?: string[]
  href?: string
}

const ProjectCard = ({ image, title, topics, href }: Props) => {
  return (
    <Link href={href || '#'} target={href ? '_blank' : undefined} rel={href ? 'noopener' : undefined}>
      <div className="w-full">
        <div className="bg-primary/10 relative rounded-xl overflow-hidden aspect-[4/3]">
          <Image
            src={image || ''}
            alt={title || ''}
            className="object-contain"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-wrap gap-2 md:gap-4 mt-4">
          {topics?.map((topic) => (
            <p className="text-sm text-primary" key={topic}>
              {topic}
            </p>
          ))}
        </div>

        <h4 className="text-xl font-extrabold mt-1 line-clamp-2">{title}</h4>
      </div>
    </Link>
  )
}

export default ProjectCard