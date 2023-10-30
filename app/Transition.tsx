import { useRouter } from 'next/navigation'
import { AnimatePresence, Variants } from 'framer'
import { motion } from 'framer'
import React from 'react'

const Transition = ({ children }: { children: React.ReactNode }) => {
  const { asPath } = useRouter()
  const variants: Variants = {
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.75
      }
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.5
      }
    }
  };
  return (
    <AnimatePresence
      initial={false}
    >
      <motion.div
        variants={variants}
        key={asPath}
        animate='in'
        initial='out'
        exit='out'
        className='h-full'
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )

}
export default Transition
