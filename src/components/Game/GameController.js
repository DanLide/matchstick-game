import React from "react";
import GameStatus from "./GameStatus";
import MoveConfig from "./MoveConfig";
import MakeMove from "./MakeMove";

const GameController = () => {
  return (
    <div className='game-controller'>
      <GameStatus />
      <MoveConfig />
      <MakeMove />
    </div>
  );
}

export default GameController;
