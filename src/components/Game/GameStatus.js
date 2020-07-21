import React, {useContext} from "react";
import {GameContext} from "../../contexts/GameContext";

const GameStatus = () => {
  const { gameData } = useContext(GameContext);
  let statusText;
  if (gameData.matchsticksAmount !== 0) {
    statusText = gameData.player === 'user' ? (
      <p style={{ color: 'grey' }}>Now it is your turn</p>
    ) : (
      <p style={{ color: 'grey' }}>AI is ifking, please wait a moment</p>
    );
  } else {
    if (gameData.userScore % 2 === 0) {
      statusText = <p style={{ color: 'green' }}>You win</p>
    } else {
      statusText = <p style={{ color: 'red' }}>If-machine win</p>
    }
  }

  return (
    <div className='game-status'>
      {statusText}
      <div className='users-score'>
        <p>Your score: {gameData.userScore}</p>
        <p>AI score: {gameData.aiScore}</p>
      </div>
    </div>
  );
}

export default GameStatus;
