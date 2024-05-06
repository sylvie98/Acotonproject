import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchApi = () => {
    const [content, setContent] = useState([]);

    const handleFetch = async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzdlMGYxOThhNDQzM2NmY2Q4MzI5MjIyMzUzZTgzZSIsInN1YiI6IjY2MzhkYTIwNDcwZWFkMDEyYTEzN2IxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QSX1nTeZjX6TtEoPmub74nQlf9c2nOXykznw2Jcyovs'
                }
            });
            setContent(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <>
            <div>
                <h1>Hello world</h1>
            </div>
            <div style={{ flex: 1, backgroundColor: 'white', display: 'flex', flexWrap: 'wrap' }}>
                {content.map((item) => (
                    <div key={item.id} style={{ backgroundColor: 'white', margin: '10px', padding: '10px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', borderRadius: '5px' }}>
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} style={{ width: '200px', height: '300px', objectFit: 'cover', borderRadius: '5px' }} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FetchApi;
