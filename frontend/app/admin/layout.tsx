import { Polybar } from "../workspace/components/Polybar";

import React from 'react'
import { AdminPolybar } from "./AdminPolybar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (

    <div className='flex flex-col h-screen bg-gray-800 '>
      <div className='section1 bg-red-500'>
        <AdminPolybar />
      </div>
      <div className='mainsection grow content bg-gray-800 overflow-y-auto border border-sky-500'>
        <div className='h-full bg-gray-800'>
          {children}
        </div>
      </div>
    </div>
  )
}
export default layout
