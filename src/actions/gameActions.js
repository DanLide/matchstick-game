import {
  DECREMENT_CURRENT_MOVE,
  INCREMENT_CURRENT_MOVE,
  LOAD_CONFIG, MAKE_AI_MOVE,
  MAKE_PLAYER_MOVE,
  RESET_GAME_STATE
} from "./actionTypes";

export const loadConfig = (config, initGameState) => {
  return {
    type: LOAD_CONFIG,
    config,
    initGameState,
  };
}

export const incrementCurrentMove = () => {
  return {
    type: INCREMENT_CURRENT_MOVE,
  };
}

export const decrementCurrentMove = () => {
  return {
    type: DECREMENT_CURRENT_MOVE,
  };
}

export const makePlayerMove = () => {
  return {
    type: MAKE_PLAYER_MOVE,
  };
}

export const makeAIMove = () => {
  return {
    type: MAKE_AI_MOVE,
  }
}

export const resetGameState = (initGameState) => {
  return {
    type: RESET_GAME_STATE,
    initGameState,
  };
}
