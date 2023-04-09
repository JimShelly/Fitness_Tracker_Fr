import React, { useState } from "react";


 export const AddRoutine = ({savedToken, setRoutines}) => {
    const [name, setName] = useState ('');
    const [goal, setGoal] = useState ('');
    const [isPublic, setIsPublic] =useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`Name: ${name}`);
        console.log(`Goal: ${goal}`);
        console.log(`IsPublic ${isPublic}`);
        
        const newRoutine = {name, goal, isPublic:isPublic}
        await SaveRoutine(savedToken, newRoutine)

            try {
                const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines`)
                    let result = await response.json()
                    setRoutines(result.routines)      
            } catch(err) {
                console.error(err)
            }
      };

      return(
         
        <form onSubmit={handleSubmit}>
             <h3> <AddRoutine></AddRoutine></h3>
            <div>
            <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
            </div>
            <div>
            <label htmlFor="goal">Goal</label>
            <input
            type="text"
            id="goal"
            value={goal}
            onChange= {(e) => {setGoal(e.target.value)}}
            />
            </div>
                <div>
                    <label htmlFor="isPublic">IsPublic</label>
                    <select
                    type="boolean"
                    id="isPublic"
                    value={isPublic}
                    onChange = {(e) => {setIsPublic(e.target.value)}}
                    >
                    < option value = "Yes">
                      Yes
                    </option>
                    <option value = "No">
                      No
                    </option> 
                    </select>
                </div>
                <button type="submit">Submit</button>
        </form>
      );
 }

 export const SaveRoutine = async (token, newRoutine) => {
  try{     
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    post: {
      name: newRoutine.name,
      goal: newRoutine.goal,
      isPublic: newRoutine.isPublic
    }
  })
  });
    const result = await response.json();
    return result
  } catch (err) {
    console.error(err);
    }
};

    // export const makeRoutine = async (ROUTINE_ID, BASE_URL, TOKEN_STRING_HERE) => {

    //     try {
    //       const response = await fetch(`${BASE_URL}/routines`, {
    //         method: "POST",
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': `Bearer ${TOKEN_STRING_HERE}`
    //         },
    //         body: JSON.stringify({
    //           post: {
    //             name: 'This is the name (or title) of the routine.',
    //             goal: 'This is like the description of the routine',
    //             isPublic: true
    //           }
    //         })
    //       });
    //       const result = await response.json();
    //       console.log(result);
    //       return result
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   }

      export const updateRoutine = async (BASE_URL, TOKEN_STRING_HERE) => {
        try {
          // You will need to insert a variable into the fetch template literal 
          // in order to make the POST_ID dynamic. 
          // 5e8d1bd48829fb0017d2233b is just for demonstration.
          const response = await fetch(`${BASE_URL}/routines/:routineId`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TOKEN_STRING_HERE}`
            },
            body: JSON.stringify({
              post: {

                name: 'This is the name (or title) of the routine.',
                goal: 'This is like the description of the routine',
                isPublic: true

              
              }
            })
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
      }
      
      export const deleteRoutine = async (BASE_URL, TOKEN_STRING_HERE) => {
        try {
          const response = await fetch(`${BASE_URL}/routines/:routineId`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TOKEN_STRING_HERE}`
            }
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
      }
    
 export default AddRoutine