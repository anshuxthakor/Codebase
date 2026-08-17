import React from 'react'

const About = () => {
  console.log("About Page Loading...")
  return (
    <div className="min-h-[calc(100vh-65px)] bg-[#1B1E20] flex flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-semibold text-white">About</h1>
      <p className="text-gray-400">This is the about page.</p>
    </div>
  )
}

export default About