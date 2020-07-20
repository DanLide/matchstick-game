import React, {createContext, useState} from "react";
import {incrementDecrementOptions} from "../utils/incrementDecrementOptions";

export const GameContext = createContext();

const initState = {
  matchsticksAmount: 0,
  matchsticksPerMove: 0,
  matchsticksForCurrentMove: 0,
  player: '',
}

const GameContextProvider = (props) => {
  const [gameData, setGameData] = useState(initState);
  const restoreGameDataToInit = () => {
    setGameData(initState);
  }
  const loadConfig = (config) => {
    setGameData({
      ...gameData,
      matchsticksAmount: 2*config.n + 1,
      matchsticksPerMove: config.m,
      player: config.firstMove
    });
  }
  const incrementDecrementOption = (option) => {
    if (option === incrementDecrementOptions.INCREMENT_CURRENT_MOVE) {
      setGameData({ ...gameData, matchsticksForCurrentMove: gameData.matchsticksForCurrentMove + 1 });
    } else {
      setGameData({ ...gameData, matchsticksForCurrentMove: gameData.matchsticksForCurrentMove - 1 });
    }
  }
  const makeMove = () => {
    setGameData({ ...gameData,
      matchsticksAmount: gameData.matchsticksAmount - gameData.matchsticksForCurrentMove,
      matchsticksForCurrentMove: 0,
    });
  }
  return (
    <GameContext.Provider value={{
      gameData,
      loadConfig,
      restoreGameDataToInit,
      incrementDecrementOption,
      makeMove }}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
