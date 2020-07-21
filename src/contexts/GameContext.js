import React, {createContext, useState} from "react";
import {incrementDecrementOptions} from "../utils/incrementDecrementOptions";
import calculateAIMove from "../utils/calculateAIMove";

export const GameContext = createContext();

const initGameState = {
  matchsticksAmount: 0,
  matchsticksPerMove: 0,
  matchsticksForCurrentMove: 0,
  player: '',
  userScore: 0,
  aiScore: 0,
}

const GameContextProvider = (props) => {
  const [gameData, setGameData] = useState(initGameState);
  const restoreGameDataToInit = () => {
    setGameData(initGameState);
  }
  const loadConfig = (config) => {
    setGameData({
      ...initGameState,
      matchsticksAmount: 2*config.n + 1,
      matchsticksPerMove: config.m,
      matchstickWidth: 200/(2*config.n + 1) > 10 ? 10 : 250/(2*config.n + 1),
      player: config.firstMove,
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
    const { matchsticksAmount, matchsticksPerMove, matchsticksForCurrentMove, userScore, aiScore } = gameData;
    if (gameData.player === 'user') {
      setGameData({
        ...gameData,
        matchsticksAmount: matchsticksAmount - matchsticksForCurrentMove,
        userScore: userScore + matchsticksForCurrentMove,
        player: matchsticksAmount - matchsticksForCurrentMove > 0 ? 'ai' : 'user',
        matchsticksForCurrentMove: 0,
      });
    } else {
      const matchsticksPerMoveForAI = matchsticksAmount > matchsticksPerMove ?
        matchsticksPerMove : matchsticksAmount;
      // We want to do AI move in one render, that's why we store matchsticks number as a local variable
      const matchsticksForAIMove = calculateAIMove(matchsticksAmount, matchsticksPerMoveForAI, aiScore);
      setGameData({
        ...gameData,
        matchsticksAmount: matchsticksAmount - matchsticksForAIMove,
        aiScore: aiScore + matchsticksForAIMove,
        player: 'user',
        matchsticksForCurrentMove: 0,
      });
    }
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
