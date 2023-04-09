import React from 'react';
import './TicTacToe.css';

const board = [
  'x', null, 'o', 
  'o', 'x', null,
  'x', 'o', null
];

const TicTacToe = () => {
  return <div className="tic-tac-toe">
    <h1>Tic-Tac-Toe</h1>
  </div>
}

<div class="board">
  <div class="cell"><span>x</span></div>
  <div class="cell"><span></span></div>
  !-- and so on --
</div>

export default TicTacToe;

<div>{
  someArray.map((item, index) => {
    return <h3 key={ index }>{ item }</h3>
  })
}</div>



