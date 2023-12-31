import React from 'react'

const Introduction = (props: {}) => {
  return (
    <div className='min-h-full'>
      <div className='flex justify-center'>
        <div className='md:block sm:hidden hidden'>
          Introduction(1)
        </div>
        <div className='grow'>
          <div className='flex justify-center'>
            General Commands Manual
          </div>
        </div>
        <div className='md:block sm:hidden hidden'>
          Introduction(1)
        </div>
      </div>
      <div className='mt-8'>
        <h1 className="text-lg font-bold uppercase">Name</h1>
        <p className="mt-2 ml-12">surajpahari</p>
      </div>
      <div className='mt-7'>
        <h1 className="text-lg font-bold uppercase">SYNOPSIS</h1>
        <p className="mt-2 ml-12">suraj [OPTIONS]....</p>
      </div>
      <div className='mt-7'>
        <h1 className="text-lg font-bold uppercase">DESCRIPTION</h1>
        <p className="mt-2 ml-12">Suraj, a software engineering student on a mission to be a strong problem solver.
          He is currently experimenting with tech to figure out his jam.</p>
      </div>

      <div className='mt-7'>
        <h1 className="text-lg font-bold uppercase">TECH STACK</h1>
        <p className="mt-2 ml-12">The tech stack outlines the programming languages,
          frameworks, libraries, and tools that Shivaji is familiar with.
        </p>
        <ul className='list-disc mt-2 ml-12'>

          <li>
            PROGRAMMING LANGUAGES: JS, PHP, Python
          </li>

          <li>
            FRAMEWORKS/LIBRARIES: Reactjs, Tailwind-CSS, NodeJs, NextJs,Flutter,Laravel
          </li>

          <li>
            DATABASES: MySQL, MongoDB
          </li>

          <li>
            TOOLS: Git, Linux
          </li>
        </ul>
      </div>

      {/*<div className='mt-7'>
        <h1 className="text-lg font-bold uppercase">PROJECTS</h1>
        <p className="mt-2 ml-12">suraj [OPTIONS]....</p>
      </div>*/}

      <div className='mt-7'>
        <h1 className="text-lg font-bold uppercase">ENVIRONMENT</h1>
        <ul className='list-disc mt-2 ml-12'>



          {/*<li>
          </li>*/}

          <li>
            OS: Manjaro Linux
          </li>

          <li>
            Terminal Emulator: iTerm2
          </li>

          <li>
            Text Editor: NeoVim
          </li>
        </ul>

      </div>

      <div className='mt-7'>
        <h1 className="text-lg font-bold uppercase">EXIT STATUS</h1>
        <p className="mt-2 ml-12 mb-2">
          suraj exists 0 on success, and tries hard not to cry if an error occurs.
        </p>
      </div>
      <div className='h-4 w-full'>
      </div>
    </div >
  )
}
export default Introduction
