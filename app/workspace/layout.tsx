"use client";
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer';
const Polybar = ({ children }: { children: React.ReactNode, isVisible: any }) => {


  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalID); // Cleanup the interval on unmount
    };
  }, []);
  const pathName = usePathname()
  return (
    <div className='bg-gray-600 h-screen'>
      <div className='flex h-full flex-col'>
        <div className='bg-gray-900 flex pr-2'>
          <div className={`${pathName === '/workspace/workspace1' ? 'bg-gray-500' : 'bg-gray-900'}`}>
            <Link href='/workspace/workspace1' className=''>intro</Link>
          </div>
          <div>
            |
          </div>
          <div className={`${pathName === '/workspace/workspace5' ? 'bg-gray-500' : 'bg-gray-900'}`}>
            <Link href='/workspace/workspace5' className='p-2'>works</Link>
          </div>
          <div>
            |
          </div>
          <div className={`${pathName === '/workspace/workspace2' ? 'bg-gray-500' : 'bg-gray-900'}`}>
            <Link href='/workspace/workspace2' className='p-2'>about</Link>
          </div>
          <div>
            |
          </div>
          <div className={`${pathName === '/workspace/workspace3' ? 'bg-gray-500' : 'bg-gray-900'}`}>
            <Link href='/workspace/workspace3' className='p-2'>blogs</Link>
          </div>
          <div>
            |
          </div>
          <div className={`${pathName === '/workspace/workspace4' ? 'bg-gray-500' : 'bg-gray-900'}`}>
            <Link href='/workspace/workspace4' className='p-2'>contacts</Link>
          </div>
          <div>
            |
          </div>
          <div className='grow hidden justify-end md:flex'>
            <div className='mr-2'>
              {time.toLocaleDateString()}
            </div>
            <div>
              {time.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false,
              })}
            </div>
          </div>
        </div>

        <div
          className='border border-blue-300 grow'>
          <AnimatePresence>
            <motion.div
              key={pathName}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              className='h-full'>
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div >
  )
}
export default Polybar
