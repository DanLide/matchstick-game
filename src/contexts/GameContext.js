import React, {createContext, useState} from "react";

export const GameContext = createContext();

const GameContextProvider = (props) => {
  const [gameData, setGameData] = useState({
    matchsticksAmount: 0,
    matchsticksPerMove: 0,
    player: '',
  });
  const restoreGameDataToInit = () => {
    setGameData({ matchsticksAmount: 0, matchsticksPerMove: 0, player: '' });
  }
  return (
    <GameContext.Provider value={{ gameData, setGameData, restoreGameDataToInit }}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
