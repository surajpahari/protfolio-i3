import React from 'react'
import { Blogs } from './config'

const Blog = (props: {}) => {
  return (
    <div className='h-full bg-gray-800 w-full p-1'>

      <div className='font-bold text-green-500 flex mb-1'>
        <div>
          [zyrex@basement&#160;&#160;<span className='text-white'> Blogs</span> &#160;]$ &#160;
        </div>
        <div className='text-white font-normal'>
          ls -la
        </div>
      </div>
      <div>
        total 4
      </div>
      <div>
        <div className='flex items-center gap-2 hover:text-gray-900 hover:bg-white cursor-pointer'>
          <div className='text-lg'>
            "NextJs is next"
          </div>
          <div className='mx-6'>
            Oct 5 2023
          </div>
          <div>
            5 min read
          </div>
          <div>
            -r
          </div>
        </div>
        <div className='flex items-center gap-2 hover:text-gray-900 hover:bg-white cursor-pointer'>
          <div className='text-lg'>
            "NextJs is next"
          </div>
          <div className='mx-6'>
            Oct 5 2023
          </div>
          <div>
            5 min read
          </div>
          <div>
            -r
          </div>
        </div>
        <div className='flex items-center gap-2 hover:text-gray-900 hover:bg-white cursor-pointer'>
          <div className='text-lg'>
            "NextJs is next"
          </div>
          <div className='mx-6'>
            Oct 5 2023
          </div>
          <div>
            5 min read
          </div>
          <div>
            -r
          </div>
        </div>
        <div className='flex items-center gap-2 hover:text-gray-900 hover:bg-white cursor-pointer'>
          <div className='text-lg'>
            "NextJs is next"
          </div>
          <div className='mx-6'>
            Oct 5 2023
          </div>
          <div>
            5 min read
          </div>
          <div>
            -r
          </div>
        </div>
      </div>
      <div>
      </div>

    </div>
  )
}

export default Blog
