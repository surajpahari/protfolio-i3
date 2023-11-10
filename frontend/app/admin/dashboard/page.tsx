import React from 'react'
import Link from 'next/link'

const page = (props: {}) => {
  return (
    <div className="p-20 h-full">
      <div className='border p-2 border-sky-500 h-full items-center justify-center'>
        <div className='mb-10'>
          <h1 className="text-center">
            Choose What You want to manage
          </h1>
        </div>
        <div className="flex justify-around gap-">
          <div className="">
            <Link
              href="/admin/dashboard/works"
            >
              <div className="border border-sky-500 p-20 rounded cursor-pointer">
                Works
              </div>
            </Link>
          </div>
          <div className="">
            <Link
              href="/admin/dashboard/blogs"
            >
              <div className="border border-sky-500 p-20 rounded cursor-pointer">
                Blogs
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div >
  )

}
export default page
