import React from 'react'
import WorkCard from './WorkCard'
import CardTitle from './CardTitle'

export const Work = (props: {}) => {


  return (

    <div className="relative h-full bg-gray-800">
      <div className='font-bold text-green-500 flex mb-1 opacity-40'>
        <div>
          [zyrex@basement&#160;&#160;<span className='text-white'>Works</span> &#160;]$ &#160;
        </div>
        <div className='text-white font-normal'>
          ./presentWorks
        </div>
      </div>
      <div className='absolute top-0  md:p-16  sm:p-1 sm:pt-6 h-full w-full text-slate-200 '>
        <div className='min-h-full w-full bg-gray-700 rounded border border-sky-500 flex items-center justify-center'>
          <div className=''>
            <div className='mb-4 flex items-center justify-center flex-wrap gap-3'>
              <WorkCard />

              <WorkCard />
              <WorkCard />

              <WorkCard />
            </div>
            <div className='flex justify-center items-center pt-6'>
              <div className='rounded-full bg-green-500 h-2 w-2'>
              </div>
            </div>

          </div>


        </div>
      </div>
    </div >
  )
}
