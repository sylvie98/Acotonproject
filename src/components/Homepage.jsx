import React from 'react'

import Home from './Home'
import Movies from './Movies'
import New from './New'

const Homepage = () => {
  return (
    <div className='bg-black text-white'> 
   
    <Home/>
    <Movies/>
    <New/>

    </div>
  )
}

export default Homepage