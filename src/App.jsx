import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navagition from './components/Navagition'

const App = () => {
  return (
    <div>
      <Router>
       <Routes>
            <Route path='/' element={<Navagition/>}/>
       </Routes>
      </Router>
    </div>
  )
}

export default App