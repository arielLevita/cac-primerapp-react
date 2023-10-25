import React from 'react';
import UserDetails from './UserDetails'
import { Link } from 'react-router-dom';


export const UserContext = React.createContext();
const User = () => {

    const user = {
        nombre: "Ariel",
        edad: 40,
        sector: "Oficina de Estudiantes",
        cargo: "Bedel"
    }

    return (
        <div>
            <Link to='/'><button className='btn btn-dark m-2'>Home</button></Link>
            <Link to='/imgmemes'><button className='btn btn-dark m-2'>Memes</button></Link>
            <Link to='/counter'><button className='btn btn-dark m-2'>Counter</button></Link>
            <Link to='/appi'><button className='btn btn-dark m-2'>Appi</button></Link>

            <UserContext.Provider value={user}>
                <UserDetails />
            </UserContext.Provider>
        </div>
    )
}

export default User