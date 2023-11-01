import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTowerBroadcast } from "@fortawesome/free-solid-svg-icons"

const WorkCard = () => {
  const GraySeperator: React.FC = () => (
    <div className="p-4">
      <div className='w-full border border-solid border-gray-500'>
      </div>
    </div>
  )

  return (
    <>
      <div className=' flex-col bg-gray-800 w-80 h-96 rounded-lg shadow-2xl cursor-pointer group'>
        <div className="flex-col h-full">
          <div className="grow">
            <div className='bg-blue w-full h-32 bg-gray-800 rounded group-hover:h-20 transition-[height]'>
              <div className='h-full flex justify-center items-center'>
                <div className='text-3xl font-bold text-slate-200'>
                  WorkShed
                </div>
              </div>
            </div>
            <GraySeperator />
            <div className='flex justify-center items-center mt-4 mb-2'>
              <div>
                Simple Employee Management App
              </div>
            </div>
            {/*dev icons*/}
            <div className='flex gap-1 p-1 justify-center items-center mb-6'>
              <div>
                <img src='
                https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg
                  '
                  width={28}
                  height={28}
                />
              </div>

              <div>
                <img src='
                https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg
                  '
                  width={28}
                  height={28}
                />
              </div>

              <div>
                <img src='
                https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg
                  '
                  width={28}
                  height={28}
                />
              </div>

              <div>
                <img src='
                https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg
                  '
                  width={28}
                  height={28}
                />
              </div>
            </div>

            {/*language used in the project*/}
            <div className='items-center jusity-center px-1 my-2 group-hover:block hidden transition-[display]'>
              <div className='flex-grow'>
                <div>
                  <div className="flex w-full h-[6px] bg-gray-300 rounded-full">
                    <div className="bg-yellow-500 w-20 rounded-l">
                    </div>
                    <div className="bg-purple-500 w-20">
                    </div>
                    <div className="bg-orange-500 w-20">
                    </div>
                    <div className="bg-purple-900 w-20">
                    </div>
                  </div>
                </div>
              </div>
              <div>
              </div>
            </div>

            {/*language description*/}
            <div className="group-hover:block hidden">
              <div className="flex w-full gap-1 items-center ml-1 text-xs ">
                <div className="bg-yellow-500 h-2 w-2 rounded ">
                </div>
                <div className="">
                  Javascript
                </div>
                <div>
                  16%
                </div>
                <div className="bg-red-500 h-2 w-2 rounded">
                </div>
                <div className="">
                  PHP
                </div>
                <div>
                  16%
                </div>
                <div className="bg-red-500 h-2 w-2 rounded text-small">
                </div>
                <div className="rounded">
                  Blade
                </div>
                <div>
                  10%
                </div>
                <div className="bg-red-500 h-2 w-2 rounded text-small">
                </div>
                <div>
                  Css
                </div>
                <div>
                  10%
                </div>
              </div>
            </div>
          </div>

          <div className="grow-0">
            {/* buttom section buttons*/}
            <div className='gap-8 flex items-center justify-center mt-8'>
              <div className="relative">
                <div className="flex border-sky-500 p-1 border-2 rounded">
                  <div className="rounded bg-white w-[32px] h-[32px] flex justify-center items-center">
                    <div>
                      <FontAwesomeIcon icon={faTowerBroadcast} className="text-green-600 h-5 w-5" />
                    </div>
                  </div>
                  <div className='cursor-pointer px-3 py-1 rounded '>
                    Live
                  </div>
                </div>
                <div className="absolute shine">
                </div>
              </div>
              <div className='rounded  cursor-pointer flex items-center justify-center '>
                <div className="flex jusity-center items-center gap-1 border-2 border-sky-500 p-1 rounded shadow-xl">
                  <div>
                    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="bg-white p-1 rounded">
                      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                  </div>
                  <div className="text-white bg-gray-800">
                    Github
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div>
    </>
  )
}
export default WorkCard
