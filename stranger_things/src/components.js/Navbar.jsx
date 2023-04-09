
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Register, Login, Posts } from '.';
import App, { token } from '../App';

export const Navbar = ({logout, token}) => {

    return (
        <>
        <div className='navigation'>
            <Link className='home' to='/'>Home</Link>
            <Link className='register' to='/Register'>Register</Link>
            <Link className='login' to='/Login'>Login</Link>
            <Link className='LOGOUT' onClick={(event) => logout(event)}>Log Out</Link>
            
        </div>
            <Routes>
                
                    <Route path='/Home' element={<Posts/>}/>
                    <Route path='/Register' element={<Register/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    
            </Routes>
         </>   
    )
};

export default Navbar;