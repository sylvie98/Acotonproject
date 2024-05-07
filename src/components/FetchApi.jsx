import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchApi = () => {
    const [content, setContent] = useState([]);

    const handleFetch = async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzdlMGYxOThhNDQzM2NmY2Q4MzI5MjIyMzUzZTgzZSIsInN1YiI6IjY2MzhkYTIwNDcwZWFkMDEyYTEzN2IxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QSX1nTeZjX6TtEoPmub74nQlf9c2nOXykznw2Jcyovs'
                }
            });
            console.log(response.data.results)
            setContent(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-7 justify-center mt-32'>
                {content.map((item) => (
                    <div key={item.id} style={{ backgroundColor: 'white', margin: '10px', padding: '10px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', borderRadius: '5px' ,color:'black'}}>
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} style={{ width: '200px', height: '300px', objectFit: 'cover', borderRadius: '5px' }} />
                        <p>{item.title}</p>
                        <p>{item.release_date}</p>
                    </div>
                ))}
            
        </div>
    );
};

export default FetchApi;
