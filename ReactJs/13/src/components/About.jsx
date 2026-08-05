import React, { use, useEffect } from 'react'

const About = () => {
  useEffect(() => {
    // Mounting Phase
    console.log("About.jsx Rendering...");    
    const interval = setInterval(() => {
      console.log("Hey I am in About.jsx")
    }, 1000);

    // Use when your component leaks some memory 
    // And if you want to track any updates
    return () => {   // Unmounting Phase
      console.log("I am triggered kyuki About.jsx is unmounted.");
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h1 className='file'>About.jsx</h1>
    </div>
  )
}

export default About
