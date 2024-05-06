import React from 'react'
import { BiSolidRightArrowCircle } from 'react-icons/bi'

const Home = () => {
  return (
    <div className='flex justify-between pt-10 bg-black text-white px-36'>
        <div className=' flex flex-col gap-4 mt-40'>
            <h1>FIND MOVIES</h1>
            <h2 className='bg-gradient-to-r from-blue-500 to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold'>TV SHOWS AND MORE</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br> 
                Esse, vel placeat hic praesentium rem eius voluptatem.<br></br> 
                Non dolor unde alias earum adipisci quas ab ex dicta,<br></br>
                 doloribus, distinctio sapiente minima.
            </p>
            <button className=' border border-white rounded-lg w-48'>
                <div className='flex justify-center gap-3'>
                <BiSolidRightArrowCircle className=' mt-1'/>
                Watch Tutorial
                </div>
                </button>
        </div>
        <div className='relative'>
            <img src='/spideman.jfif' className='absolute  top-20 right-52 w-[25rem]'/>
            <img src='/home.jfif' className=' w-[25rem]'/>
        </div>
    </div>
  )
}

export default Home