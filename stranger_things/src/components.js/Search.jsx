import React, { useState } from "react";
import {postMatches} from '../App.js'


 const Search = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    function postMatches(post,text) {
        console.log(searchTerm)
        return (
            <div>
                <label for = "site-search"> Search the site:</label>
                <input type = "search" id = "site-search" onChange={event => setSearchTerm(event.target.value)} name = "q"/>

                <button onClick={postMatches}>Search</button>
            </div>
        )
    }
    return (
            <h3> Search</h3>
    )}
    

   
export default Search