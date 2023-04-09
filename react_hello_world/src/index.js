import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './profile';
const App = (props) => {
    return <div className="app">
      <Profile />
      <div className="dark-mode">
        <h1>Dark Mode</h1>
      </div>
      <div className="tic-tac-toe">
        <h1>Tic-Tac-Toe</h1>
      </div>
      <div className="todo">
        <h1>Todo</h1>
      </div>
    </div>
  }
ReactDOM.render(
  <App />,
  document.getElementById('app')
);