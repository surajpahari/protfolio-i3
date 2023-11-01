import React from 'react'

export const Work = (props: {}) => {
  return (

    <div className="relative h-full">
      <div className='font-bold text-green-500 flex mb-1 opacity-30'>
        <div>
          [zyrex@basement&#160;&#160;<span className='text-white'>Works</span> &#160;]$ &#160;
        </div>
        <div className='text-white font-normal'>
          ./presentWorks
        </div>
      </div>
      <div className='absolute top-0  p-20 h-full w-full'>
        <div className='border border-sky-500 bg-gray-800 rounded p-2 flex gap-1 '>
          <div className="border border-gray-300 bg-white rounded-lg p-2 sm:p-4 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 sm:shadow-md">
            <div>
              <div className="w-24 h-24 sm:w-40 sm:h-40 bg-sky-500 rounded-lg flex items-center justify-center text-white">
                <div className='text-3xl font-bold'>
                  W
                </div>
              </div>
              <div className="flex-1 mt-2 sm:mt-0">
                <div className="text-lg sm:text-2xl font-bold text-gray-900">Workshed</div>
                <div className="text-gray-600 mt-1 sm:mt-2">Simple employee management app.</div>
                <div className="bg-gray-800 mt-1 sm:mt-2 p-2 flex justify-center">
                  <i className="devicon-react-original colored text-2xl"></i>
                  <i className="devicon-laravel-plain-wordmark colored text-2xl"></i>
                  <i className="devicon-html5-plain colored text-2xl"></i>
                  <i className="devicon-css3-plain colored text-2xl"></i>
                  <i className="devicon-tailwindcss-plain colored text-2xl"></i>
                </div>
                <div className="flex mt-2 sm:mt-4 space-x-2 sm:space-x-4">
                  <button className="bg-blue-500 text-white py-2 px-3 sm:py-2 sm:px-4 rounded-full hover:bg-blue-600 transition duration-300">GitHub</button>
                  <button className="bg-blue-500 text-white py-2 px-3 sm:py-2 sm:px-4 rounded-full hover:bg-blue-600 transition duration-300">Live</button>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 bg-white rounded-lg p-2 sm:p-4 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 sm:shadow-md">
            <div>
              <div className="w-24 h-24 sm:w-40 sm:h-40 bg-yellow-500 rounded-lg flex items-center justify-center text-white">
                <div className='text-3xl font-bold'>
                  W
                </div>
              </div>
              <div className="flex-1 mt-2 sm:mt-0">
                <div className="text-lg sm:text-2xl font-bold text-gray-900">Workshed</div>
                <div className="text-gray-600 mt-1 sm:mt-2">Simple employee management app.</div>
                <div className="bg-gray-800 mt-1 sm:mt-2 p-2 flex justify-center">
                  <i className="devicon-react-original colored text-2xl"></i>
                  <i className="devicon-laravel-plain-wordmark colored text-2xl"></i>
                  <i className="devicon-html5-plain colored text-2xl"></i>
                  <i className="devicon-css3-plain colored text-2xl"></i>
                  <i className="devicon-tailwindcss-plain colored text-2xl"></i>
                </div>
                <div className="flex mt-2 sm:mt-4 space-x-2 sm:space-x-4">
                  <button className="bg-blue-500 text-white py-2 px-3 sm:py-2 sm:px-4 rounded-full hover:bg-blue-600 transition duration-300">GitHub</button>
                  <button className="bg-blue-500 text-white py-2 px-3 sm:py-2 sm:px-4 rounded-full hover:bg-blue-600 transition duration-300">Live</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
