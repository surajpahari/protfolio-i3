"use client";
import Image from 'next/image'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

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
      <Link
        href="/workspace/workspace1"
      >
        <div className='px-3 py-2  absolute bottom-0 right-0 text-white bg-green-500 cursor-pointer'>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </span>
        </div>
      </Link>
    </div>

  )
}
