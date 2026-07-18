import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  const [user, setUser] = useState({ name: "Raman" });
  console.log(user);

  return (
    <div className='app'>
      <span>{count}</span>
      <h1>VariableCount</h1>
      <button className='inc' onClick={() => setCount(count + 1)}>Increment</button>
      <h2 className="userText">{user.name}</h2>
      <button className='userName' onClick={() => setUser({ ...user, name: "Baman" })}>†</button>
    </div>
  )
}

export default App