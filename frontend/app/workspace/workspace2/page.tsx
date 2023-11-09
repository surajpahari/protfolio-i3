import React from 'react'
import Link from 'next/link'
import { About } from './About'
const page = (props: {}) => {
  return (
    <div className='flex justify-center minh-full items-center bg-yellow-300'>
      <About />
      <div className='bg-teal-500 absolute bottom-0 right-0'>
        <Link
          href='/'
        >
          Back to home
        </Link>
      </div>
    </div >
  )
}
export default page
