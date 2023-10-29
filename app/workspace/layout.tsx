import React from 'react'
import Link from 'next/link'

const Polybar = ({ children }: { children: React.ReactNode }) => {
  const [time, setTime] = useState(new Date());
  return (
    <div className='bg-gray-600 h-screen'>
      <div className='flex h-full flex-col'>
        <div className='bg-gray-900 flex gap-4 pl-2'>
          <div className='cursor-pointer'>
            <Link href='/workspace/workspace1'>1</Link>
          </div>
          <div className='cursor-pointer'>
            <Link href='/workspace/workspace2'>2</Link>
          </div>
        </div>
        <div className='bg-red-500 grow'>
          {children}
        </div>
      </div>
    </div>
  )
}
export default Polybar
