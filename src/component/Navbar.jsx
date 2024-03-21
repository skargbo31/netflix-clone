import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 z-[100] absolute w-full'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
        <div className=''>
          <Link to='/login'>
          <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
          <button className='bg-red-600 px-6 py-2 cursor-pointer rounded text-white'>Sign Up</button>

          </Link>
        </div>
    </div>

  )
}

export default Navbar
