import React from "react";
import { useState } from "react";

export default function Register ({ token}) {
    const [userName, setNewUserName] = useState('');
    const [passWord, setNewPassWord] = useState('');

    async function registerUser(event) {
        event.preventDefault();
        console.log ('username and password event', event.target[0]);
         fetch (`https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-PT/users/register`,
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
                console.log('This is the register result', result);
                localStorage.setItem ('token', result.data.token);
            })
            .catch(console.error);
            setNewUserName ('');
            setNewPassWord ('');
        }
        return (
            <form onSubmit={(event) => registerUser(event)}>
                <h4>
                    Register New Account
                </h4>
                <label> New Username:</label>
                <input
                type="text"
                value={userName}
                onChange={(event) => setNewUserName(event.target[0])}
                ></input>
                <label> New Password:</label>
                <input
                type="password"
                value={passWord}
                onChange={(event) => setNewPassWord(event.target[1])}
                ></input>
                <button type = "submit">Register</button>
            </form>
        );
}   
