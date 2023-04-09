// //Initialize the game state
// let gameState = {};

// //Initialize the board
// const newBoard = () => {
//     return ([
//         ['', '', '', '', '', '', '', '', '', '', '', ''],
//         ['', '', '', '', '', '', '', '', '', '', '', ''],
//         ['', '', '', '', '', '', '', '', '', '', '', ''],
//         ['', '', '', '', '', '', '', '', '', '', '', ''],
//         ['', '', '', '', '', '', '', '', '', '', '', ''],
//         ['', '', '', '', '', '', '', '', '', '', '', ''],
//         ['', '', '', '', '', '', '', '', '', '', '', ''],
//         ['', '', '', '', '', '', '', '', '', '', '', ''],
//         ['', '', '', '', '', '', '', '', '', '', '', ''],
//         ['', '', '', '', '', '', '', '', '', '', '', ''],
//         ['', '', '', '', '', '', '', '', '', '', '', ''],
//         ['', '', '', '', '', '', '', '', '', '', '', ''],
//     ]);
// }

// // This will be my three Game states
// const PLAYING = 'PLAYING';
// const GAME_OVER = 'GAME_OVER';
// const NEWGAME ='NEWGAME';

// //Define the directions
// const LEFT ='ArrowLeft';
// const RIGHT ='ArrowRight';
// const UP ='ArrowUp';
// const DOWN='ArrowDown';

// function buildInitialState() {
//     gameState.snake = {
//         body: [ [10, 5], [10, 6], [10, 7], [10, 8] ],
//         // nextDirection 1 === increment. 0 === stay the same. -1 === decrement.
//         // first number is y (up/down)
//         // second number is x (left/right)
//         nextDirection: [0,-1],
//     }

//     gameState.apple = [11,8];
//     gameState.board = newBoard();
//     gameState.phase = NEW;
//     gameState.speed = 300;
//     gameState.interval = null;
// }

// const addSnakeToBoard = () => {
//     gameState.snake.body.map(([y,x]) => {
//         gameState.board[y][x]= 'snake';
//     })
// };

// const addAppleToBoard = () => {
//     const [y,x] = gameState.apple;
//     gameState.board[y][x] = 'apple';
// }

// const updateBoard= () => {
//     gameState.board = newBoard();
//     addSnakeToBoard();
//     addAppleToBoard();
// }

// const emptyElement = (nodeToEmpty) => {
//     while (nodeToEmpty.firstChild) {

//         nodeToEmpty.removeChild(nodeToEmpty.firstChild);
//     }
// }

// function renderPrompt () {
//     const prompt = document.querySelector('#prompt');
//     let html;
//     switch (gameState.phase) {
//         case PLAYING:
//             prompt.classList.remove('game-over');
//             html=`Score. ${gameState.snake.body.length}`;
//             break;
//             case GAME_OVER:
//                 prompt.classList.add('game-over');
//                 html = `Game Over! Total Score: ${gameState.snake.body.length} <button class= "start-game">Play Again</button>`;
//                 break;
//                 case NEWGAME:
//                     html=`World of Snake! Ready? <button class= " start-game">START</button>`;
//                     break;
//                     default:
//                         html=`World of Snake! Ready? <button class= " start-game">START</button>`;
//     }
//     prompt.innerHTML=html;
// }

// function renderBoard () {
//     const boardElem = document.querySelector('#board');
//     console.log(boardElem);

//     alert(boardElem);
//     for (let y=0; y< gameState.board.length; ++y){
//         const row = gameState.board[y];
//         for (let x=0; x<row.length; ++x) {
//             // create a jquery cell, adding the currently stored string at the position as a class.
//             const cellElem = document.createElement('div');
//             cellElem.classList.add('cell');
//             const itemInCell= gameState.board[y][x];
//             if(itemInCell) {
//                 cellElem.classList.add(itemInCell);
//             }
           
//             cellElem.dataset.coordinates = `${y}, ${x}`;
//             // append the cell
//             boardElem.appendChild(cellElem);
//         }
//     }
// }

// function renderButtons() {
//     const controls =document.querySelector('#controls');
//     emptyElement (controls);

//     for (const direction of [LEFT, UP, RIGHT, DOWN]) {
//         const directionWord = direction.slice(5);
//         const button=document.createElement('button');
//         button.classList.add(directionWord.toLowerCase());
//         button.innerText=directionWord;
//         button.addEventListener('click', function () {
//             turnSnake(direction);
//         });
//         controls.appendChild(button);
//     }
// }

// const getRandomBoardIndex = (boardSize = 12) => {
//     console.log(Math.floor(Math.random() * boardSize));
//     return Math.floor(Math.random() * boardSize);
// };

// const moveApple = () => {
//     const y = getRandomBoardIndex();
//     const x = getRandomBoardIndex();

//     gameState.apple = [y,x];
// }

// const turnSnake = (direction) => {
//     if (direction===LEFT) gameState.snake.direction=[0,-1];
//     else if (direction===RIGHT) gameState.snake.direction=[0,1];
//     else if (direction===UP) gameState.snake.direction=[-1,0];
//     else if (direction===DOWN) gameState.snake.direction=[1,0];
// }

// const eatApple = () => {
//     if(!gameState.snake.body.length % 5) gameState.speed *=0.70;
//     console.log("Snake Speed", gameState.snake.speed);
//     moveApple();
//     addAndRenderAll();
// }

// const moveSnake = () => {
//     //create new array of 2 numbers that will be the first array of the snake's body incremented by the next 
//     const [y,x] = gameState.snake.body[0]; // get the head of the snake
//     const segmentToAdd = [y+gameState.snake.nextDirection[0], x + gameState.snake.nextDirection[1]];
//     //if there is room for the snake...
//     if ([undefined,'snake'].includes(gameState.board[segmentToAdd[0]][segmentToAdd[1]])){
//         changePhaseTo(GAME_OVER);
//     } else{
//         //move the snake there
//         if(gameState.board[segmentToAdd[0]][segmentToAdd[1]]==='apple') {
//             eatApple();
//         }else {
//             // pop off the last array from the body
//             gameState.snake.body.pop();
//         }
//         // unshift a new array to gameState.snake.body
//         gameState.snake.body.unshift(segmentToAdd);
//     }
// }
// const changePhaseTo = (phase) => {
//     gameState.phase=phase;
//     switch (phase) {
//         case PLAYING:
//             gameState.interval=setInterval(tick,gameState.speed);
//             break;
//             case GAME_OVER:
//                 clearInterval(gameState.interval);
//                 break;
//                 default:
//                     clearInterval(gameState.interval);
//     }
// }

// function tick () {
//     moveSnake();
//     addAndRenderAll ();
// }
// const addAndRenderAll =() => {
//     updateBoard();
//     renderPrompt();
//     renderBoard();
// }

// //Add listeners
// const addListener =() => {
//     const prompt = document.querySelector('#prompt');
//     prompt.addEventListener('click', function({target}){
//         if(target.className!= 'start-game') return;
//         buildInitialState();
//         changePhaseTo (PLAYING);
//         renderButtons();
//         addAndRenderAll();
//       })

//       document.onkeydown = function(event) {
//         if (![LEFT,RIGHT,UP,DOWN]. includes(event.key)) return;
//         console.log('Event Key', event.key);
//         turnSnake(event.key);
//       };
// };

// buildInitialState();
// addAndRenderAll();

let gameState = {};

const newBoard = () => ([
  ['', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', ''],
]);

// GAME PHASES
const PLAYING = 'PLAYING';
const GAME_OVER = 'GAME_OVER';
const NEW = 'NEW';

// DIRECTIONS
const LEFT = 'ArrowLeft';
const RIGHT = 'ArrowRight';
const UP = 'ArrowUp';
const DOWN = 'ArrowDown';

function buildInitialState() {
  gameState.snake = {
    body: [ [10, 5], [10, 6], [10, 7], [10, 8] ],
    // nextDirection 1 === increment. 0 === stay the same. -1 === decrement.
    // first number is y (up/down)
    // second number is x (left/right)
    nextDirection: [0, -1]
  };
  gameState.apple = [11, 8];
  gameState.board = newBoard();
  gameState.phase = NEW;
  gameState.speed = 300;
  gameState.interval = null;
}

const addSnakeToBoard = () => {
  gameState.snake.body.map(([y, x]) => {
    gameState.board[y][x] = 'snake';
  })
}

const addAppleToBoard = () => {
  const [y, x] = gameState.apple;
    gameState.board[y][x] = 'apple';
}

const updateBoard = () => {
  gameState.board = newBoard();
  addSnakeToBoard();
  addAppleToBoard();
}

const emptyElement = (nodeToEmpty) => {
  while (nodeToEmpty.firstChild) {
    nodeToEmpty.removeChild(nodeToEmpty.firstChild);
  }
}

function renderPrompt() {
  const prompt = document.querySelector('#prompt');
  let html;
  switch (gameState.phase) {
    case PLAYING:
      prompt.classList.remove('game-over');
      html = `Score: ${gameState.snake.body.length}`;
      break;
    case GAME_OVER:
      prompt.classList.add('game-over');
      html = `Game Over! Total Score: ${gameState.snake.body.length} <button class="start-game">Play Again</button>`;
      break;
    case NEW:
      html = `Welcome to Snake! Ready? <button class="start-game">START</button>`;
      break;
    default:
      html = `Welcome to Snake! Ready? <button class="start-game">START</button>`;
  }
  prompt.innerHTML = html;
}

// render
function renderBoard() {
  const boardElem = document.querySelector('#board');
  emptyElement(boardElem);
  for (let y = 0; y < gameState.board.length; ++y){
      const row = gameState.board[y];
      for (let x = 0; x < row.length; ++x){
          // create a jquery cell, adding the currently stored string at that position as a class.
          const cellElem = document.createElement('div');
          cellElem.classList.add('cell');
          const itemInCell = gameState.board[y][x];
          if(itemInCell) cellElem.classList.add(itemInCell);
          cellElem.dataset.coordinates = `${y},${x}`;
          // append the cell
          boardElem.appendChild(cellElem);
      }
  }
}

function renderButtons() {
  const controls = document.querySelector('#controls');
  emptyElement(controls);
  for(const direction of [LEFT, UP, RIGHT, DOWN]){
    const directionWord = direction.slice(5);
    const button = document.createElement('button');
    button.classList.add(directionWord.toLowerCase());
    button.innerText = directionWord;
    button.addEventListener('click', function() {
      turnSnake(direction);
    });
    controls.appendChild(button);
  }
}

const getRandomBoardIndex = (boardSize = 12) => {
  return Math.floor(Math.random() * boardSize);
}

// logic for moving snake and apple
const moveApple = () => {
  const y = getRandomBoardIndex();
  const x = getRandomBoardIndex();
  gameState.apple = [y, x];
}

const turnSnake = (direction) => {
  if (direction === LEFT) gameState.snake.nextDirection = [0, -1];
  else if (direction === RIGHT) gameState.snake.nextDirection = [0, 1];
  else if (direction === UP) gameState.snake.nextDirection = [-1, 0];
  else if (direction === DOWN) gameState.snake.nextDirection = [1, 0];
  
}

const eatApple = () => {
  if (!gameState.snake.body.length % 5) gameState.speed *= 0.70;
  moveApple();
  addAndRenderAll();
}

const changePhaseTo = (phase) => {
  gameState.phase = phase;
  switch (phase) {
    case PLAYING:
      gameState.interval = setInterval(tick, gameState.speed);
      break;
    case GAME_OVER:
      clearInterval(gameState.interval);
      break;
    default:
      clearInterval(gameState.interval);
  }
}

const moveSnake = () => {
  // create new array of 2 nums that will be the first array of the snake's body incremented by the next direction
  const [y, x] = gameState.snake.body[0];
  const segmentToAdd = [y + gameState.snake.nextDirection[0], x + gameState.snake.nextDirection[1]];
  // if there is room for the snake...
  if ([undefined, 'snake'].includes(gameState.board[segmentToAdd[0]][segmentToAdd[1]])) {
    changePhaseTo(GAME_OVER);
  } else {
    // move the snake there
    if(gameState.board[segmentToAdd[0]][segmentToAdd[1]] === 'apple') {
      eatApple();
    } else {
      // pop off the last array from the body
      gameState.snake.body.pop();
    }
    // unshift a new array to gameState.snake.body
    gameState.snake.body.unshift(segmentToAdd);
  }

}

const addAndRenderAll = () => {
  updateBoard();
  renderPrompt();
  renderBoard();
}

// maybe a dozen or so helper functions for tiny pieces of the interface

// tick()
function tick(){
  moveSnake();
  addAndRenderAll();
}

// listeners
const prompt = document.querySelector('#prompt');
prompt.addEventListener('click',function({target}){
  if(target.className !== 'start-game') return;
  buildInitialState();
  changePhaseTo(PLAYING);
  renderButtons();
  addAndRenderAll();
})

// arrow listeners
document.onkeydown = function(event) {
  event.preventDefault();
  // prevent unnecessary/unwanted functionality on other keys
  if (![LEFT, RIGHT, UP, DOWN].includes(event.key)) return;
  turnSnake(event.key);
};

buildInitialState();
addAndRenderAll();










