import React, { useEffect, useState } from 'react'
import axios from 'axios'
const FetchApi = () => {
    const handleFetch = async()=>{
        const[usecontant,setusecontact]=useState([])

        axios({
            method:'GET',
            URL:'https://api.themoviedb.org/3/trending/all/day?language=en-US',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzdlMGYxOThhNDQzM2NmY2Q4MzI5MjIyMzUzZTgzZSIsInN1YiI6IjY2MzhkYTIwNDcwZWFkMDEyYTEzN2IxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QSX1nTeZjX6TtEoPmub74nQlf9c2nOXykznw2Jcyovs'
              },
        }).then((response) =>{
            console.log(response.data.result)
       } ).catch((error)=>{
            console.log(error)
        })
    useEffect(()=>{
        handleFetch()
    })
    
}
  return (
    <div>
      <h1>helo</h1>
      <div>{data}</div>
    </div>
  )
}

export default FetchApi
