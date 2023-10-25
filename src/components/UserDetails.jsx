import React, { useContext } from 'react'
import { UserContext } from './User.jsx'

const UserDetails = () => {

    const user = useContext(UserContext);

    return (
        <div className='m-5'>
            <p>Nombre: {user.nombre}</p>
            <p>Edad: {user.edad}</p>
            <p>Sector: {user.sector}</p>
            <p>Cargo: {user.cargo}</p>
        </div>
    )
}

export default UserDetails