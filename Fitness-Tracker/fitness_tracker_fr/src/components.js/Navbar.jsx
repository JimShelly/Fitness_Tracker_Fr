
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Register, Login, Routines, Activities, AddRoutine, Header } from '.';
import App, { token } from '../App';

export const Navbar = ({logout, token}) => {

    return (
        <>
        <div className='navigation'>
            <Link className='home' to='/'>Home</Link>
            <Link className='register' to='/Register'>Register</Link>
            <Link className='login' to='/Login'>Login</Link>
            <Link className='LOGOUT' onClick={(event) => logout(event)}>Log Out</Link>
            <Link className='Routines' to = '/Routines'> Routines</Link>
            <Link className='AddRoutine' to = '/AddRoutine'>AddRoutine</Link>
            <Link className='Activities' to = '/Activities'>Activities</Link>
        </div>
            <Routes>
                
                    <Route path='/Header' element={<Header/>}/>
                    <Route path='/Routines' element={<Routines/>}/>
                    <Route path='/Register' element={<Register/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/AddRoutine' element={<AddRoutine/>}/>
                    <Route path='/Activities' element={<Activities/>}/>
                    
            </Routes>
         </>   
    )
};

export default Navbar;