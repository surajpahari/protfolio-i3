import React from 'react'
import { Polybar } from './components/Polybar';


const WindowLayout = ({ children }: { children: React.ReactNode, isVisible: any }) => {
  return (
    <>
      <div className='flex flex-col h-screen bg-gray-800 '>
        <div className='section1 bg-red-500'>
          <Polybar />
        </div>
        <div className='mainsection grow content bg-gray-800 overflow-y-auto border border-sky-500'>
          <div className='h-full bg-gray-800'>
            {children}
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div>
        </div>
        <div className='grow'>
          <div className='h-full '>
          </div>
        </div>
      </div>

    </>
  )
}
export default WindowLayout;
