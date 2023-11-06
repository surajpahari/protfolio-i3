import React from 'react'
import Link from 'next/link'

export const ManBlog = (props: {}) => {
  return (
    <div className='bg-gray-800 h-full w-full p-1'>
      <div>
        <div className='flex justify-center'>
          <div>
            Posts(1)
          </div>
          <div className='grow'>
            <div className='flex justify-center'>
              BSD General Commands Manual
            </div>
          </div>
          <div>
            Posts(1)
          </div>
        </div>
        <div className='mt-4 p-2'>
          <div className='mb-2 text-lg font-bold'>
            Blogs
          </div>
          <div className='ml-4 '>

            <div className='group'>
              <Link href="/workspace/workspace3/readblogs">
                <div className='text-lg font-bold group-hover:underline'>
                  1.Blog Writing
                </div>
                <div className='ml-4'>
                  Things to consider while writing blogs....
                </div>
                <div className='ml-4 text-gray-500'>
                  Oct-28 2023
                </div>
              </Link>
            </div>

            <div className='group'>
              <Link href="/workspace/workspace3/readblogs">
                <div className='text-lg font-bold group-hover:underline'>
                  1.Blog Writing
                </div>
                <div className='ml-4'>
                  Things to consider while writing blogs....
                </div>
                <div className='ml-4 text-gray-500'>
                  Oct-28 2023
                </div>
              </Link>
            </div>

            <div className='group'>
              <Link href="/workspace/workspace3/readblogs">
                <div className='text-lg font-bold group-hover:underline'>
                  1.Blog Writing
                </div>
                <div className='ml-4'>
                  Things to consider while writing blogs....
                </div>
                <div className='ml-4 text-gray-500'>
                  Oct-28 2023
                </div>
              </Link>
            </div>


            <div className='group'>
              <Link href="/workspace/workspace3/readblogs">
                <div className='text-lg font-bold group-hover:underline'>
                  1.Blog Writing
                </div>
                <div className='ml-4'>
                  Things to consider while writing blogs....
                </div>
                <div className='ml-4 text-gray-500'>
                  Oct-28 2023
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div >
  )
}
export default ManBlog
