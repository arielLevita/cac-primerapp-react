import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to='/counter'><button className='btn btn-dark m-2'>Counter</button></Link>
            <Link to='/user'><button className='btn btn-dark m-2'>User</button></Link>
            <Link to='/imgmemes'><button className='btn btn-dark m-2'>Memes</button></Link>
            <Link to='/appi'><button className='btn btn-dark m-2'>Appi</button></Link>
            
            <h1 className='text-center mt-5'>Bienvenidos!</h1>
        </div>
    )
}

export default Home