import React from 'react'
import { Blogs } from './config'
import Link from 'next/link'

export const ManBlog = (props: {}) => {
  return (
    <div className='bg-gray-800 h-full w-full p-1'>
      <div>
        <div className='flex justify-center'>
          <div>
            Blogs(1)
          </div>
          <div className='grow'>
            <div className='flex justify-center'>
              BSD General Commands Manual
            </div>
          </div>
          <div>
            Blogs(1)
          </div>
        </div>
        <div className='mt-4 p-2'>
          <div className='mb-4 text-lg font-bold'>
            Blogs
          </div>
          <div className='ml-4'>
            {
              Blogs.map((blog, index) => (
                <div className='group mb-2'>
                  <Link href="/workspace/workspace3/readblogs">
                    <div className='text-md font-bold group-hover:underline'>
                      {(index + 1) + ". " + blog.title}
                    </div>
                    <div className='ml-4'>
                      {blog.description}
                    </div>
                    <div className='ml-4 text-gray-500'>
                      {blog.date}
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div >
  )
}
export default ManBlog
