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
          <form method='post' action={'http://localhost:4000/create'} className='text-black'>
            <div className='m-2'>
              <input placeholder='about' name='about' />
            </div>
            <div className='m-2'>
              <input placeholder='title' name='title' />
            </div>
            <div className='m-2'>
              <input placeholder='content' name='content' />
            </div>
            <div className='m-2'>
              <input placeholder='uploaded At' name='uploadedAt' />
            </div>
            <div>
              <input type='submit' className='rounded bg-green-500 m-2 p-2 cursor-pointer' />
            </div>
          </form>
        </div>
        <div>
          Add blogs
        </div>
      </div>
    </div>
  )
}
export default page
