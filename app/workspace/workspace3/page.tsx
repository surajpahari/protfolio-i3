import Link from 'next/link'
import React from 'react'
import Blog from './Blog'
import ManBlog from './ManBlog'
const page = (props: {}) => {
  return (
    <div className='flex justify-center h-full items-center bg-sky-300'>
      <ManBlog />
    </div>
  )
}
export default page
