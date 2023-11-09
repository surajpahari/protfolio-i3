"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useState } from 'react';

export const Polybar = (props: {}) => {
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
    <div className='bg-green-500 w-full z-10'>
      <div className='bg-gray-900 flex pr-2'>
        <div className={`${pathName === '/workspace/workspace1' ? 'bg-gray-500' : 'bg-gray-900'} border-r border-white p-1`}>
          <Link href='/workspace/workspace1' className='p-1'>intro</Link>
        </div>
        <div className={`${pathName === '/workspace/workspace5' ? 'bg-gray-500' : 'bg-gray-900'} border-r border-white p-1`}>
          <Link href='/workspace/workspace5' className='p-1'>works</Link>
        </div>
        {/*<div className={`${pathName === '/workspace/workspace2' ? 'bg-gray-500' : 'bg-gray-900'} border-r border-white p-1`}>
            <Link href='/workspace/workspace2' className='p-1'>about</Link>
            </div>
              */}
        <div className={`${pathName.startsWith('/workspace/workspace3') ? 'bg-gray-500' : 'bg-gray-900'} border-r border-white p-1`}>
          <Link href='/workspace/workspace3' className='p-1'>blogs</Link>
        </div>
        <div className={`${pathName === '/workspace/workspace4' ? 'bg-gray-500' : 'bg-gray-900'} border-r border-white p-1`}>
          <Link href='/workspace/workspace4' className='p-1'>contacts</Link>
        </div>
        <div className='grow hidden justify-end md:flex items-center'>

          <div className='mr-2'>

            {`${time.getFullYear()}-${String(time.getMonth() + 1).padStart(2, '0')}-${String(time.getDate()).padStart(2, '0')}`}

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
    </div>
  )
}
