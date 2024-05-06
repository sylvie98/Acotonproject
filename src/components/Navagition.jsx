import React from 'react'
import { Link } from 'react-router-dom'

const Navagition = () => {
  return (
    <div className=' flex  justify-between font-serif bg-black text-white px-36'>
      <div className='flex'>
        <Link to={"/"}><img src="/movie.png" alt=""  className=' w-28 text-white'/></Link>
      </div>
        <ul className=' flex gap-5'>
            
            <Link to={"/Home"}><a>Home</a></Link>
            <Link to={'/FetchApi' }><a>Experince</a></Link>
            <a>Game</a>
            <Link to={"/New"}><a>News</a></Link>
            <Link to={"/Movies"}><a>Movies</a></Link>
            <a>Tv Shows</a>
        </ul>
    </div>
  )
}

export default Navagition