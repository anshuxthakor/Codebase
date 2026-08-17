import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `pb-1 text-sm font-medium border-b-2 transition-colors duration-200 ${
      isActive
        ? 'border-white text-white'
        : 'border-transparent text-gray-400 hover:text-white'
    }`

  return (
    <nav className="bg-[#1B1E20] border-b border-white/10 px-6 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h1 className="text-white font-semibold text-2xl">Navbar</h1>
        <div className="flex gap-6">
          <NavLink to="/" className={linkClass}>App</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar