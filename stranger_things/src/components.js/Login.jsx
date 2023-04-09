import React from "react";
import { useState } from "react";

export default function Login ({ setToken}) {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    async function loginUser(event) {
        event.preventDefault();
        console.log ('username and password event', event.target[0]);
         fetch (`https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-PT/users/login`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body :JSON.stringify({
                    user:{
                        username: event.target[0].value,
                        password : event.target[1].value
                    }
                   
                })
            }).then (response => response.json())
            .then (result => {
                console.log('This is the login result', result);
                localStorage.setItem ('token', result.data.token);
            })
            .catch(console.error);
            setUserName ('')
            setPassWord ('')
        }
        return (
            <form onSubmit={(event) => loginUser(event)}>
                <h4>
                    Log Into Account
                </h4>
                <label> Username:</label>
                <input
                type="text"
                value={userName}
                onChange={(event) => setUserName(event.target[0])}
                ></input>
                <label> Password:</label>
                <input
                type="password"
                value={passWord}
                onChange={(event) => setPassWord(event.target[1])}
                ></input>
                <button type = "submit">Login</button>
            </form>
        );
}   



