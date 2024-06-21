import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const WorkExperience = () => {
  return (
    <div className='relative z-10 -mt-10 pb-20' id='achievements'>
      <h1 className='heading pb-10'>
        <span className='text-purple'>My Work Experience</span>
      </h1>
      <div className='flex flex-col items-center max-lg:mt-10'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 pt-10 pb-20'>
          {companies.map(({id, img, name, nameImg}) => (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
              <img
                src={img}
                alt={name}
                className='md:w-10 w-5'
              />
              <img
                src={nameImg}
                alt={name}
                className='md:w-124 w-20'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkExperience