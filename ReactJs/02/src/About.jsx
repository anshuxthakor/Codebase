import React from 'react'

const About = (props) => {
  console.log(props.name, props.age)
  return (
    <div>
      <h3>This is from <span>About.jsx</span></h3>
    </div>
  )
}

export default About