import {
  DECREMENT_M,
  DECREMENT_N,
  INCREMENT_M,
  INCREMENT_N,
  RESET_CONFIG,
  SET_FIRST_MOVE,
} from "../actions/actionTypes";

export const configReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_N:
      return {
        ...state,
        n: state.n + 1,
      };
    case INCREMENT_M:
      return {
        ...state,
        m: state.m + 1,
      };
    case DECREMENT_N:
      return {
        ...state,
        n: state.n - 1,
      };
    case DECREMENT_M:
      return {
        ...state,
        m: state.m - 1,
      };
    case SET_FIRST_MOVE:
      return {
        ...state,
        firstMove: action.selectedUser,
      };
    case RESET_CONFIG:
      return action.initConfig;
    default:
      return state;
  }
}
