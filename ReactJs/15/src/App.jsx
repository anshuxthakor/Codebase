import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App
