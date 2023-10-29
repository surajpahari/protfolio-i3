"use client";
import Image from 'next/image'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter()
  useEffect(() => {
    const handleEnterKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        router.push('/workspace/workspace1')
      }
    };
    document.addEventListener('keydown', handleEnterKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEnterKeyPress);
    };
  }, []);
  return (
    <div className='h-screen relative'>
      <div className='flex h-full w-full bg-gray-600 justify-center items-center'>
        <div className='text-white bg-gray-600 text-3xl'>
          HI ! I AM SURAJ PAHARI
        </div>
      </div>
      <div className='text-white absolute bottom-0 right-0'>
        Press Enter to continue
      </div>
    </div>

  )
}
