import React, { useState } from "react";
import {routineMatches} from '../App.js'


 const Search = () => {
    const [routines, setRoutines] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    function routineMatches(routine,text) {
        console.log(searchTerm)
        return (
            <div>
                <label for = "site-search"> Search the site:</label>
                <input type = "search" id = "site-search" onChange={event => setSearchTerm(event.target.value)} name = "q"/>

                <button onClick={routineMatches}>Search</button>
            </div>
        )
    }
    return (
            <h3> Search</h3>
    )}
    

   
export default Search