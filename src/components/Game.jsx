import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Game = () => {
    const [data,setdata]=useState([]);
    const HandleFetch = async() =>{
        try{
          const Response =  await axios({
                method:'GET',
                url: 'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
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
         
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 justify-center'>
            {data.map((item)=>(
                <div key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                    <p>{item.name}</p>
                    <p>{item.first_air_date}</p>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Game