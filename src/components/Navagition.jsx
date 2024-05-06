import React from 'react'
import { Link } from 'react-router-dom'

const Navagition = () => {
  return (
    <div className=' flex  justify-between font-serif  pt-10'>
      <div className='flex'>
        <Link to={"/"}><img src="/movie.png" alt=""  className=' w-28 text-white'/></Link>
      </div>
        <ul className=' flex gap-5'>
            
            <Link to={"/Home"}>Home</Link>
            <Link to={'/FetchApi' }>Experince</Link>
            <Link to={'/Game'}>Game</Link>
            <Link to={"/New"}>News</Link>
            <Link to={"/Movies"}>Movies</Link>
            <Link to={"/TvShow"}>Tv Shows</Link>
        </ul>
    </div>
  )
}

export default Navagition