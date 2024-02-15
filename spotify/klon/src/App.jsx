import { useState } from 'react'
import './App.css'
import { BottomBar } from './components/BottomBar'
import { Content } from './components/Content'
import { Sidebar } from './components/Sidebar'
import {BrowserRouter as Router } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
     <Router>
     <div className='wrapper bg-black bg-opacity-85'>
        <Sidebar />
        <Content />
        
      </div>
      <BottomBar />
      </Router>
  )
}

export default App
