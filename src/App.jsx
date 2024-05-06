import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

import Homepage from './components/Homepage'
import Navagition from './components/Navagition'
import Layout from './components/Layout'
import New from './components/New'
import Movies from './components/Movies'
import Home from './components/Home'
import FetchApi from './components/FetchApi'

const App = () => {
  return (
    <div>
     
      <Router>
        <Navagition/>
       <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path='Home' element={<Home/>}/>
            <Route path='New' element={<New/>}/>
            <Route path='/Movies' element={<Movies/>}/>
            <Route path='/FetchApi' element={<FetchApi/>}/>
            </Route>
       </Routes>
      </Router>
    
    </div>
  )
}

export default App