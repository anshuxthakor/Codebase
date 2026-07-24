import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-neutral-900 px-5 py-2 rounded-2xl'>
      <h1 className='text-xl font-bold text-emerald-400'>Userzz</h1>
      <div className="flex gap-5 text-sm text-white font-semibold">
        <span className='hover:cursor-pointer hover:text-yellow-300 transition ease duration-100'>Home</span>
        <span className='hover:cursor-pointer hover:text-yellow-300 transition ease duration-100'>About</span>
        <span className='hover:cursor-pointer hover:text-yellow-300 transition ease duration-100'>Contact</span>
      </div>
      <button className='bg-emerald-500 cursor-pointer px-3 py-1 rounded text-sm text-white font-semibold active:scale-[0.95] transition ease duration-100'>Add User</button>
    </div>
  )
}

export default Navbar
