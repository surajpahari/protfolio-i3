import React from 'react'
import Link from 'next/link'

const Polybar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-gray-600 h-screen'>
      <div className='bg-gray-900 flex gap-4 pl-2'>
        <div className='cursor-pointer'>
          <Link href='/workspace1'>1</Link>
        </div>
        <div className='cursor-pointer'>
          <Link href='/workspace2'>2</Link>
        </div>
      </div>
      {children}
    </div>
  )
}
export default Polybar
