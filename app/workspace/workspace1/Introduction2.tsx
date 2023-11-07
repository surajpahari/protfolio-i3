
"use client";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from "framer-motion"
const Introduction = () => {
  const text = "Suraj Pahari"

  return (
    <>
      <div className="flex h-max min-h-full items-center justify-center text-white p-4">
        <div className="flex  flex-wrap items-center justify-center">
          <div className="border-4  border-gray-200 flex items-center justify-center h-40 w-40 sm:h-72 sm:w-72 rounded-full m-5" >
            <div className="w-full h-full   " >
            </div>
          </div>
          <div className=" md:m-2 flex justify-center items-center">
            <div className="flex-col gap-2 ">
              <div
                className="md:text-start text-center w-64 p-1 text-lg font-semibold ">
                HI THERE!
              </div>
              <div className="font-bold md:text-3xl text-lg
                w-full  justify-center  items-center flex p-2  flex-wrap"
              >
                <div className="p-4 pr-1 ">
                  I&apos;M
                </div>
                <div className=" p-4 pl-1 flex-grow ">
                  <div className=" text-orange-500  ">
                    {text}
                  </div>
                </div>
              </div>

              <p
                className="md:text-start md:block hidden p-2">
                Im a freelancer UI/UX Designer and Develper based on Pokhara,Nepal.<br />
                I strives to build immersive and beautiful web applications through carefully crafted
                <br />code and user-centric design.
              </p>
              <p
                className="md:invisible text-center p-2" >
                Im a freelancer and Developer.
                <br />
                Based on Pokhara Nepal.
              </p>
            </div>
          </div>
        </div>
      </div >
      <div className='relative'>
        <div className='absolute bottom-0 left-0'>
          <div className='flex ml-4'>
            <div className='p-2'>
              <img
                height={25}
                width={25}
                src='https://raw.githubusercontent.com/danielcranney/profileme-dev/afa05625904238dbcd297b5384c65e0a09e439ac/public/icons/socials/instagram.svg' />
            </div>
            <div className='p-2'>
              <img
                height={25}
                width={25}
                src='https://raw.githubusercontent.com/danielcranney/profileme-dev/afa05625904238dbcd297b5384c65e0a09e439ac/public/icons/socials/github-dark.svg' />
            </div>
            <div className='p-2'>
              <img
                height={25}
                width={25}
                src='https://raw.githubusercontent.com/danielcranney/profileme-dev/afa05625904238dbcd297b5384c65e0a09e439ac/public/icons/socials/facebook-dark.svg' />
            </div>

          </div>
        </div>

        <div className='flex items-center justify-center'>
          <div className=''>
            <div className='flex  gap-5 items-center pl-4 m-2 mb-4'>
              <div>
                Languages
              </div>
              <div className='flex gap-2'>
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg'
                  height={30} width={30} />

                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg'
                  height={30} width={30} />
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg'
                  height={30} width={30} />
              </div>
            </div>

            <div className='flex  gap-5 items-center pl-4 m-2 mb-4'>
              <div>
                Libraries/framework
              </div>
              <div className='flex gap-2'>
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg'
                  height={30} width={30} />
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg'
                  height={30} width={30} />
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-dark.svg'
                  height={30} width={30} />
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg'
                  height={30} width={30} />
              </div>
            </div>
            <div className='flex  gap-5 items-center  pl-4 m-2 mb-4'>
              <div>
                Tools
              </div>
              <div className='flex gap-2'>
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg'
                  height={30} width={30} />
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg'
                  height={30} width={30} />
              </div>
            </div>
            <div className='flex  gap-2 items-center mb-4 pl-4 m-2'>
              <div>
                Databases
              </div>
              <div className='flex gap-2'>
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg'
                  height={30} width={30} />
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql.svg'
                  height={30} width={30} />
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}
export default Introduction;

