import React from 'react'
import Link from 'next/link'
import Introduction from './Introduction'

const page = (props: {}) => {
  return (
    <div className="relative h-full bg-gray-800">
      <div className='font-bold text-green-500 flex mb-1 opacity-30 p-1'>
        <div>
          [zyrex@basement&#160;&#160;<span className='text-white'>Introduction</span> &#160;]$ &#160;
        </div>
        <div className='text-white font-normal'>
          ./giveIntro
        </div>
      </div>

      <div className='absolute top-0  md:p-20 sm:p-0 sm:pt-10 h-full w-full'>
        <div className='w-full min-h-full border border-blue-500 bg-slate-800 rounded'>
          <Introduction />
        </div>
      </div>
    </div >
  )
}


export default page
