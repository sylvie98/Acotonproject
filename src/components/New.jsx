import React, { useEffect, useState } from 'react'
import axios from 'axios'

const New = () => {
    const [data,setdata]=useState([]);
    const HandleFetch = async() =>{
        try{
          const Response =  await axios({
                method:'GET',
                url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
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
    <div className=' mt-20'>
         <div className=' flex justify-between mb-8'>
            <p className='text-2xl font-bold'>YOU MAY LIKE THIS</p>
            <p>See More</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 justify-center'>
            {data.map((item)=>(
                <div key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                    <p>{item.title}</p>
                </div>
            ))}

        </div>
    </div>
  )
}

export default New