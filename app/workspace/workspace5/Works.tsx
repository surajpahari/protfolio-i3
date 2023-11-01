import React from 'react'
import WorkCard from './WorkCard'
import CardTitle from './CardTitle'

export const Work = (props: {}) => {


  return (

    <div className="relative h-full">
      <div className='font-bold text-green-500 flex mb-1 opacity-30'>
        <div>
          [zyrex@basement&#160;&#160;<span className='text-white'>Works</span> &#160;]$ &#160;
        </div>
        <div className='text-white font-normal'>
          ./presentWorks
        </div>
      </div>
      <div className='absolute top-0  p-20 h-full w-full text-slate-200'>
        <div className='border border-sky-500 bg-gray-700 rounded p-2 flex gap-1 shadow-2xl'>
          <div className='mb-4 flex gap-2'>
            <WorkCard />
            <WorkCard />
          </div>
        </div>
      </div>
    </div >
  )
}
