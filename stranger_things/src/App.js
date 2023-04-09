import React, {useEffect, useState} from 'react'; 
import {Header, Posts, Footer, PostForm, Navbar} from './components.js'
import './App.css';

export const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFhMzliYWQ3MDliNTAwMTZiMTNlNzIiLCJ1c2VybmFtZSI6ImpzZmRvbmtvaCIsImlhdCI6MTY3OTQ0MDMxNH0.1Oah_nJQB5O5UloRuat6urdnlOvbEtdIOHDE_5AJggY`

function App() {
  const [token, setToken] = useState('')
  const [posts, setPosts,] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value)
    }

    let filteredPosts = [];
    let postsToDisplay = [];
    let allPosts = posts;

    function postMatches() {
     filteredPosts = posts.filter(post => {
          if (searchTerm === '') {
            return post;
          } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return post;
       }
      })
      
      allPosts = posts;
      postsToDisplay = searchTerm.length ? filteredPosts : posts;
      if (postsToDisplay) {
      setPosts(postsToDisplay);
      } else {
        setPosts(allPosts);
      }
    }
  const savedToken = localStorage.getItem('token')

  useEffect (() => {
    const savedToken = localStorage.getItem('token')
    if(savedToken) {
      setToken(savedToken)
}
    async function getPosts ({posts}) {
      try {
        const resp = await fetch ('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-PT/posts')
        let result = await resp.json()
        console.log ("data", posts)
        setPosts(result.data.posts)
    } catch (error) {
      console.log (error);
    }
  }

    getPosts ()
  
    }, [])
    function Logout() {
      localStorage.removeItem('token')
      setToken('') 
    }

  return (
    <div className="Buttons">
        <div className="container">
          <Header /> 
          <Navbar token={token} logout = {Logout} />
          <div className="row">
            <div className="col">
              <main>
                <div>
              <label for="site-search">Search posts:</label>
              <input type="search" id="site-search" onChange={handleInputChange}/>
               <button onClick={postMatches}>Search</button>
               </div>
                <Posts posts = {posts}/>
              </main>
            </div>
            < aside className= "col">
              <PostForm  setPosts={setPosts} savedToken={savedToken}/>
            </aside>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
    </div>
    
  );
}

export default App;
