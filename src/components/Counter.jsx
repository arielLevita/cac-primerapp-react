import React, { useState } from 'react'

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
        <div className='border rounded shadow p-4'>
            <h2>Función de contador</h2>
            <p className='mb-4'>Contador: {counter}</p>
            <button onClick={handleSubstract} className='btn btn-danger fw-semibold mx-2'>Restar</button>
            <button onClick={handleReset} className='btn btn-warning fw-semibold mx-2'>Volver a 0</button>
            <button onClick={handleAdd} className='btn btn-success fw-semibold mx-2'>Sumar</button>

        </div>
    )
}

export default Counter