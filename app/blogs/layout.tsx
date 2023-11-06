import React, { ReactNode } from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-gray-700 border border-sky-500 h-full w-full'>
      {children}
    </div>
  )
}
export default layout
