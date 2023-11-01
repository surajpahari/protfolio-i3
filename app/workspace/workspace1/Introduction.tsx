
"use client";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from "framer-motion"
const Introduction = () => {
  const [text] = useTypewriter({
    words: ['SURAJ PAHARI.', 'A WEB DEVELOPER.', 'A BLOGGER.', 'A FREELANCER.'],
    loop: false,
  });

  return (
    <>

      <div className="flex h-max min-h-full items-center justify-center text-white">
        <div className="flex  flex-wrap items-center justify-center">
          <div className="border-4  border-gray-200 flex items-center justify-center h-40 w-40 sm:h-72 sm:w-72 rounded-full m-5" >
            <div className="w-full h-full   " >
            </div>
          </div>
          <div className=" md:m-2 flex justify-center items-center">
            <div className="flex-col gap-2 ">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="md:text-start text-center w-64 p-1 text-lg font-semibold ">
                HI THERE!
              </motion.div >
              {/* <div className=" font-bold text-3xl md:text-start " > 
                <div className="bg-red-500 flex w-full justify-center ">
                  <div className="w-full text-center">I&apos;M AM &nbsp;</div>
                </div>
                <div className="text-green-300 bg-white flex w-full ">
                  <div className="w-full ">
                    {text}<span><Cursor /></span>
                  </div>
                </div>
              </div> 
              BORDER HERE 
              */}
              <motion.div className="font-bold md:text-3xl text-lg
                w-full  justify-center  items-center flex p-2  flex-wrap"
              >
                <div className="p-4 pr-1 ">
                  I&apos;M
                </div>
                <div className=" p-4 pl-1 flex-grow ">
                  <div className=" text-orange-500  ">
                    {text}<Cursor />
                  </div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="md:text-start md:block hidden p-2">
                Im a freelancer UI/UX Designer and Develper based on Pokhara,Nepal.<br />
                I strives to build immersive and beautiful web applications through carefully crafted
                <br />code and user-centric design.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="md:invisible text-center p-2" >
                Im a freelancer and Developer.
                <br />
                Based on Pokhara Nepal.

              </motion.p>
            </div>
          </div>
        </div>
      </div >


    </>
  )
}
export default Introduction;

