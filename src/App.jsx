import React from 'react'
import Home from './component/Home'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App