import React from 'react'

const Introduction = (props: {}) => {
  return (
    <div>
      <div className='flex justify-center'>
        <div>
          Introduction(1)
        </div>
        <div className='grow'>
          <div className='flex justify-center'>
            BSD General Commands Manual
          </div>
        </div>
        <div>
          Introduction(1)
        </div>
      </div>
      <div className='mt-8'>
        <h1 className="text-lg font-bold uppercase">Name</h1>
        <p className="mt-2 ml-12">surajpahari noice</p>
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
            FRAMEWORKS/LIBRARIES: Laravel, Bootstrap, Reactjs, Tailwind-CSS, NodeJs, Express
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
        <p className="mt-2 ml-12">suraj [OPTIONS]....</p>
        <ul className='list-disc mt-2 ml-12'>
          <li>
            PROGRAMMING LANGUAGES: JS, PHP, Python
          </li>

          <li>
            FRAMEWORKS/LIBRARIES: Laravel, Bootstrap, Reactjs, Tailwind-CSS, NodeJs, Express
          </li>

          <li>
            DATABASES: MySQL, MongoDB
          </li>

          <li>
            TOOLS: Git, Linux
          </li>
        </ul>

      </div>

      <div className='mt-7'>
        <h1 className="text-lg font-bold uppercase">EXIT STATUS</h1>
        <p className="mt-2 ml-12">
          suraj exists 0 on success, and tries hard not to cry if an error occurs.
        </p>
      </div>
    </div >
  )
}
export default Introduction
