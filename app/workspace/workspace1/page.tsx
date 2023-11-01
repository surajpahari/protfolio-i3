import React from 'react'
import Link from 'next/link'

const page = (props: {}) => {
  return (
    <div className="relative h-full">
      <div className='font-bold text-green-500 flex mb-1 opacity-60'>
        <div>
          [zyrex@basement&#160;&#160;<span className='text-white'>Introduction</span> &#160;]$ &#160;
        </div>
        <div className='text-white font-normal'>
          ./giveIntro
        </div>
      </div>

      <div className='absolute top-0  p-20 h-full w-full'>
        <div className='w-full h-full border border-blue-500 bg-slate-800 rounded'>
          Hellow
        </div>
      </div>
    </div >
  )
}


export default page
