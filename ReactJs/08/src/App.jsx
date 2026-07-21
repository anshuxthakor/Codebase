import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  const [toggle, setToggle] = useState();

  return (
    <div className='app'>
      {toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} />}
    </div>
  )
}

export default App