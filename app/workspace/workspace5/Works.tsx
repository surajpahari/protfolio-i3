import React from 'react'
import WorkCard from './WorkCard'
import CardTitle from './CardTitle'

export const Work = (props: {}) => {


  return (

    <div className="relative h-full">
      <div className='font-bold text-green-500 flex mb-1 opacity-40'>
        <div>
          [zyrex@basement&#160;&#160;<span className='text-white'>Works</span> &#160;]$ &#160;
        </div>
        <div className='text-white font-normal'>
          ./presentWorks
        </div>
      </div>
      <div className='absolute top-0  md:p-16  sm:p-1 sm:pt-6 h-full w-full text-slate-200'>
        <div className='h-full w-full bg-gray-700 rounded border border-sky-500 flex items-center justify-center'>
          <div className='p-2 flex gap-1 '>
            <div className='mb-4 grid md:grid-cols-3  gap-3'>
              <WorkCard />
              <WorkCard />
              <WorkCard />

            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
