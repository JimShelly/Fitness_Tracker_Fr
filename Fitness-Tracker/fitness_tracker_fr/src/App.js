import React, {useEffect, useState} from 'react'; 
import {Header, Routines, Footer, AddRoutine, Navbar} from './components.js'
import './App.css';

export const token = `eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9`

function App() {
  const [token, setToken] = useState('')
  const [routines, setRoutines,] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value)
    }

    let filteredRoutines = [];
    let routinesToDisplay = [];
    let allRoutines = routines ;

    function routineMatches() {
     filteredRoutines = routines.filter(routine => {
          if (searchTerm === '') {
            return routine;
          } else if (routine.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return routine;
       }
      })
      
      allRoutines = routines;
      routinesToDisplay = searchTerm.length ? filteredRoutines : routines;
      if (routinesToDisplay) {
      setRoutines(routinesToDisplay);
      } else {
        setRoutines(allRoutines);
      }
    }
  const savedToken = localStorage.getItem('token')

  useEffect (() => {
    const savedToken = localStorage.getItem('token')
    if(savedToken) {
      setToken(savedToken)
}
    async function getRoutines ({routines}) {
      try {
        const resp = await fetch ('http://fitnesstrac-kr.herokuapp.com/api/routines')
        let result = await resp.json()
        console.log (routines)
        setRoutines(result.data.routines)
    } catch (error) {
      console.log (error);
    }
  }

    getRoutines ()
  
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
              <label for="site-search">Search routines:</label>
              <input type="search" id="site-search" onChange={handleInputChange}/>
               <button onClick={routineMatches}>Search</button>
               </div>
                <Routines routines = {routines}/>
              </main>
            </div>
            < aside className= "col">
              <AddRoutine  setRoutines={setRoutines} savedToken={savedToken}/>
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
