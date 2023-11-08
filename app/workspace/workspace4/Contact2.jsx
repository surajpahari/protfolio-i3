const Contact = () => {
  return (
    <div className="relative h-full">
      <div className='font-bold text-green-500 flex mb-1 opacity-40'>
        <div>
          [zyrex@basement&#160;&#160;<span className='text-white'> ContactMe</span> &#160;]$ &#160;
        </div>
        <div className='text-white font-normal'>
          ./contactForm
        </div>
      </div>

      <div className="absolute top-0 h-full w-full rounded">
        <div className="flex  items-center h-full w-full justify-center rounded">
          <div className="bg-gray-800 w-96 rounded p-2 shadow-xl border border-blue-500 text-green-500">
            <div className="flex justify-center items-center w-full font-bold text-2xl">
              Get In Touch
            </div>
            <div className="p-1">
              <div>
                Full Name
              </div>
              <div>
                <input placeholder="full name " className="w-full p-2 rounded outline-none" />
              </div>
            </div>

            <div className="p-1">
              <div>
                Email
              </div>
              <div className="w-full">
                <input placeholder="email" className="w-full p-2 rounded outline-none" />
              </div>
            </div>
            <div className="p-1">
              <div>
                Message
              </div>
              <div>

                <textarea class="block w-full h-32 p-2 text-sm border overflow-y-auto outline-none resize-none rounded-md focus:outline-none" placeholder="Enter your text here"></textarea>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="border border-blue-500 p-2 rounded">
                Send
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Contact
