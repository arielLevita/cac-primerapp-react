import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Counter = () => {

    let [counter, setCounter] = useState(0);

    const handleAdd = () => {
        setCounter(counter + 1)
    };
    
    const handleReset = () => {
        setCounter(counter = 0)
    };

    const handleSubstract = () => {
        setCounter(counter - 1)
    };


    return (
        <div>
            <Link to='/'><button className='btn btn-dark m-2'>Home</button></Link>
            <Link to='/user'><button className='btn btn-dark m-2'>User</button></Link>
            <Link to='/imgmemes'><button className='btn btn-dark m-2'>Memes</button></Link>
            <Link to='/appi'><button className='btn btn-dark m-2'>Appi</button></Link>
            
            <div className='d-flex justify-content-center align-items-center my-5'>
                <div className='border rounded shadow p-4'>
                    <h2>Función de contador</h2>
                    <p className='mb-4'>Contador: {counter}</p>
                    <button onClick={handleSubstract} className='btn btn-danger fw-semibold mx-2'>Restar</button>
                    <button onClick={handleReset} className='btn btn-warning fw-semibold mx-2'>Volver a 0</button>
                    <button onClick={handleAdd} className='btn btn-success fw-semibold mx-2'>Sumar</button>

                </div>
                
            </div>
        </div>
    )
}

export default Counter