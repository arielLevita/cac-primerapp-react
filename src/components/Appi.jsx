import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Appi = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getMovies();
    }, [])

    /* async function getMovies() {
        const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1")
        const responseData = await response.json();
        setData(responseData.results);
    } */

    /* async function getMovies() {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseData = await response.json();
            setData(responseData.results);
        } catch (error) {
            console.error("An error occurred while fetching data:", error);
        }
    } */

    /* async function getMovies() {
        const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1")
        setData(response.data.results);
    } */

    /* async function getMovies() {
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1")
        .then((response) => {
            setData(response.data.results)
        });
    } */

    function getMovies() {
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1")
            .then((response) => {
                setData(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            });
    }


    return (
        <div>
            <Link to='/'><button className='btn btn-dark m-2'>Home</button></Link>
            <Link to='/user'><button className='btn btn-dark m-2'>User</button></Link>
            <Link to='/imgmemes'><button className='btn btn-dark m-2'>Memes</button></Link>
            <Link to='/counter'><button className='btn btn-dark m-2'>Counter</button></Link>

            <div className='d-flex flex-wrap gap-3 ms-2'>
                {data.map((movie) => (

                    <div className="card" style={{width: 300}}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                            className="card-img-top" alt={movie.title} />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
