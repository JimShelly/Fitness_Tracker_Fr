import React,  {useEffect, useState} from "react";

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
      fetch("http://fitnesstrac-kr.herokuapp.com/api/activities", {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setActivities(result);
        })
        .catch(console.error);
    }, []);
  
    return (
      <>
        <div className="activities">
          <div className="activities-container">
            <div className="activities-content">
              <h1> Activities </h1>
              <p>
                Find your favorite activity and get to it! Or add something new...
              </p>
              <div className="activities-list-container">
              
              {
                activities.map((activity, index) => {
                return (
                  <section className="activities-list">
                    <ul key={index}>
                      <li>
                        <div>{activity.name}</div>
                        <div>{activity.description}</div>
                      </li>
                    </ul>
                  </section>
                );
              })
              
              }
              </div>
            </div>
            
          </div>
        </div>
      </>
    );
  };
  
  export default Activities;
