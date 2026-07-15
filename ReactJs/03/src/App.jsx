import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  const [flag, setFlag] = useState(true);
  console.log(flag);

  return (
    <div className='app'>
      <span>{count}</span>
      <h1>VariableCount</h1>
      <button className='inc' onClick={() => setCount(count + 1)}>Increment</button>
      <h2 className="ftext">{flag.toString().toUpperCase()}</h2>
      <button className='flag' onClick={() => setFlag(false)}>†</button>
    </div>
  )
}

export default App