import React,  {useEffect, useState} from "react";


export default function Routines() {
    const [routines, setRoutines] = useState([]);
useEffect (() => {
    async function getRoutines() {
        try {
            const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines')
            let result = await response.json()
            setRoutines(result.routines)
            console.log ('result.data.routines', result.routines )
            

        } catch(err) {
            console.log(err)
        }
    }

    getRoutines()

},[])

return routines.map(routine => {
    return(
        <div key={routine._id} className="card">
            <div>{routine.name}</div>
            <div>{routine.goal}</div>
        </div>
    )
})

}