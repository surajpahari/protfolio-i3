import React from 'react'

const page = (props: {}) => {
  return (
    <div className='h-full p-20'>
      <div className='h-full border border-sky-500'>
        <div className='w-full flex justify-center items-center p-2'>
          <input
            className='bg-transparent border-sky-500 border rounded w-lg p-1'
            placeholder='Search for blogs'
          />
        </div>
        <div>
          Add blogs
        </div>
      </div>
    </div>
  )
}
export default page
