import Link from 'next/link'
import React from 'react'
import Blog from './Blog'
const page = (props: {}) => {
  return (
    <div className='flex justify-center h-full items-center bg-sky-300'>
      <Blog />
    </div>
  )
}
export default page
