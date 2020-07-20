import React, {useContext} from "react";
import {GameContext} from "../../contexts/GameContext";

const GameStatus = () => {
  const { gameData } = useContext(GameContext);
  const statusText = gameData.player === 'user' ? (
    <p>Now it is your turn</p>
  ) : (
    <p>AI is ifking, please wait a moment</p>
  );
  return (
    <div className='game-status'>
      {statusText}
    </div>
  );
}

export default GameStatus;
