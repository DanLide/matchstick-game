import {
  DECREMENT_M,
  DECREMENT_N,
  INCREMENT_M,
  INCREMENT_N, RESET_CONFIG, SET_FIRST_MOVE
} from "./actionTypes";

export const incrementN = () => {
  return {
    type: INCREMENT_N,
  };
}

export const incrementM = () => {
  return {
    type: INCREMENT_M,
  };
}

export const decrementN = () => {
  return {
    type: DECREMENT_N,
  };
}

export const decrementM = () => {
  return {
    type: DECREMENT_M,
  };
}

export const setFirstMove = (selectedUser) => {
  return {
    type: SET_FIRST_MOVE,
    selectedUser,
  };
}

export const resetConfig = (initConfig) => {
  return {
    type: RESET_CONFIG,
    initConfig,
  };
}
