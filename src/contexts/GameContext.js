import React, {createContext, useReducer} from "react";
import {gameReducer} from "../reducers/gameReducer";
import {configReducer} from "../reducers/configReducer";

export const GameContext = createContext();

const initConfig = {
  firstMove: 'user',
  n: 0,
  m: 0,
}

const initGameState = {
  matchsticksAmount: 0,
  matchsticksPerMove: 0,
  matchsticksForCurrentMove: 0,
  player: '',
  userScore: 0,
  aiScore: 0,
}

const GameContextProvider = (props) => {
  const [config, dispatchConfig] = useReducer(configReducer, initConfig);
  const [gameState, dispatchGame] = useReducer(gameReducer, initGameState);
  return (
    <GameContext.Provider value={{ config, dispatchConfig, initConfig, gameState, dispatchGame, initGameState }}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
