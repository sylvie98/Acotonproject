import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SlFire } from 'react-icons/sl'

const Movies = () => {
    const [data,setdata]=useState([]);
    const HandleFetch = async() =>{
        try{
          const Response =  await axios({
                method:'GET',
                url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
                 headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzdlMGYxOThhNDQzM2NmY2Q4MzI5MjIyMzUzZTgzZSIsInN1YiI6IjY2MzhkYTIwNDcwZWFkMDEyYTEzN2IxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QSX1nTeZjX6TtEoPmub74nQlf9c2nOXykznw2Jcyovs'
                  }
            });
            console.log(Response.data.results)
            setdata(Response.data.results);
        } catch(error){
            console.log(error);
        }
    };
     useEffect(() =>{
        HandleFetch();
     },
    []);
  return (
    <div className=' mt-10'>
        <div className=' flex justify-between'>
            <div className=' flex mb-8'>
                <SlFire className=' mt-2 text-orange-500'/>
                <p className='text-2xl font-bold'>Trending</p>
            </div>
            <p>See More</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 justify-center'>
            {data.map((item)=>(
                <div key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                    <p>{item.title}</p>
                    <p>{item.release_date}</p>
                   
                </div>
            ))}

        </div>
    </div>
  )
}

export default Movies