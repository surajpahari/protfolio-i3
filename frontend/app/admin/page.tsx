import React from 'react'

const page = (props: {}) => {
  return (
    <div className="flex  items-center h-full w-full justify-center rounded z-20">
      <div className="bg-gray-800 w-96 rounded p-2 shadow-xl border border-blue-500 text-green-500">
        <div className="flex justify-center items-center w-full font-bold text-2xl mb-4">
          Welcome !
        </div>
        <div className="p-1">
          <div>
            UserName
          </div>
          <div>
            <input placeholder="username " className="w-full p-2 rounded outline-none" />
          </div>
        </div>

        <div className="p-1">
          <div>
            Password
          </div>
          <div className="w-full">
            <input placeholder="password" type="password" className="w-full p-2 rounded outline-none" />
          </div>
        </div>
        <div className="p-1">
          <a className='italic underline'>
            Forget Password
          </a>
        </div>
        <div className="flex justify-end">
          <div className="border border-blue-500 p-2 rounded">
            <button className='cursor-pointer'>
              Login
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}
export default page
