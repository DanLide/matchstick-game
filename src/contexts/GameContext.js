import React, {createContext, useState} from "react";

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
  return (
    <GameContext.Provider value={{ gameData, setGameData, restoreGameDataToInit }}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
