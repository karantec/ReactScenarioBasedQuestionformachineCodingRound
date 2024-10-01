import React, { useState } from 'react';



// FUNCTION SnakeAndLadder
//   INITIALIZE playerPosition to 1
//   INITIALIZE diceValue to 1
//   INITIALIZE gameOver to false

//   DEFINE snakes and ladders position

//   FUNCTION rollDice
//     IF gameOver is true THEN
//       RETURN

//     SET diceRoll to random number between 1 and 6
//     SET diceValue to diceRoll
//     SET newPosition to playerPosition + diceRoll

//     IF newPosition has a snake THEN
//       SET newPosition to snake position
//     ELSE IF newPosition has a ladder THEN
//       SET newPosition to ladder position
//     END IF

//     IF newPosition >= 100 THEN
//       SET newPosition to 100
//       SET gameOver to true
//     END IF

//     SET playerPosition to newPosition
//   END FUNCTION

//   FUNCTION resetGame
//     SET playerPosition to 1
//     SET gameOver to false
//   END FUNCTION

//   FUNCTION generateBoard
//     FOR i from 100 down to 1 BY -10
//       CREATE row
//       FOR j from 0 to 9
//         CALCULATE cellNum
//         ADD cell to row, highlighting playerPosition
//       END FOR
//       ADD row to board
//     END FOR
//     RETURN board
//   END FUNCTION

//   RENDER game board
//   DISPLAY playerPosition, diceValue, gameOver status
//   PROVIDE buttons to roll dice and reset game
// END FUNCTION

// Snake and Ladder positions
const snakes = {
  16: 6,
  47: 26,
  49: 11,
  56: 53,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 78,
};

const ladders = {
  1: 38,
  4: 14,
  9: 31,
  21: 42,
  28: 84,
  36: 44,
  51: 67,
  71: 91,
  80: 100,
};

// SnakeAndLadder Component
const SnakeAndLadder = () => {
  const [playerPosition, setPlayerPosition] = useState(1); // Player starts at position 1
  const [diceValue, setDiceValue] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  // Dice roll (1 to 6)
  const rollDice = () => {
    if (gameOver) return;

    const diceRoll = Math.floor(Math.random() * 6) + 1;
    setDiceValue(diceRoll);
    let newPosition = playerPosition + diceRoll;

    // Check for snakes and ladders
    if (snakes[newPosition]) {
      newPosition = snakes[newPosition];
    } else if (ladders[newPosition]) {
      newPosition = ladders[newPosition];
    }

    // Check if the player wins
    if (newPosition >= 100) {
      newPosition = 100;
      setGameOver(true);
    }

    setPlayerPosition(newPosition);
  };

  // Reset game
  const resetGame = () => {
    setPlayerPosition(1);
    setGameOver(false);
  };

  // Generate the game board
  const generateBoard = () => {
    const board = [];
    for (let i = 100; i > 0; i -= 10) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        const cellNum = i - j;
        row.push(
          <div
            key={cellNum}
            className={`w-16 h-16 flex items-center justify-center border ${
              playerPosition === cellNum ? 'bg-green-300' : 'bg-white'
            }`}
          >
            {cellNum}
          </div>
        );
      }
      board.push(
        <div key={i} className="flex">
          {row}
        </div>
      );
    }
    return board;
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-6 text-center">Snake and Ladder Game</h1>

      {/* Game Board */}
      <div className="border-2 border-gray-500 inline-block mb-6">
        {generateBoard()}
      </div>

      {/* Dice and Player Info */}
      <div className="text-center mb-4">
        <p className="text-lg mb-2">Player Position: {playerPosition}</p>
        <p className="text-lg mb-2">Dice Rolled: {diceValue}</p>
        {gameOver && <p className="text-green-500">Game Over! You Win!</p>}
      </div>

      {/* Roll Dice Button */}
      <div className="flex justify-center space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={rollDice}
          disabled={gameOver}
        >
          Roll Dice
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default SnakeAndLadder;
