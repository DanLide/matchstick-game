import React, {useContext} from "react";
import GameStatus from "./GameStatus";
import MoveConfig from "./MoveConfig";
import MakeMove from "./MakeMove";
import {GameContext} from "../../contexts/GameContext";
import StartGame from "../Config/StartGame";

const GameController = () => {
  const { gameData } = useContext(GameContext);
  const { matchsticksAmount } = gameData;
  return matchsticksAmount > 0 ? (
    <div className='game-controller'>
      <GameStatus />
      <MoveConfig />
      <MakeMove />
    </div>
  ) : (
    <div className='game-controller'>
      <GameStatus />
      <StartGame />
    </div>
  );
}

export default GameController;
