import {
  DECREMENT_CURRENT_MOVE,
  INCREMENT_CURRENT_MOVE,
  LOAD_CONFIG, MAKE_AI_MOVE,
  MAKE_PLAYER_MOVE,
  RESET_GAME_STATE
} from "../actions/actionTypes";
import calculateAIMove from "../utils/calculateAIMove";

export const gameReducer = (state, action) => {
  switch (action.type) {
    case LOAD_CONFIG:
      const { initGameState, config } = action;
      return {
        ...initGameState,
        matchsticksAmount: 2*config.n + 1,
        matchsticksPerMove: config.m,
        matchstickWidth: 150/(2*config.n + 1) > 5 ? 6 : 200/(2*config.n + 1),
        player: config.firstMove,
      };
    case INCREMENT_CURRENT_MOVE:
      return {
        ...state,
        matchsticksForCurrentMove: state.matchsticksForCurrentMove + 1,
      };
    case DECREMENT_CURRENT_MOVE:
      return {
        ...state,
        matchsticksForCurrentMove: state.matchsticksForCurrentMove - 1,
      };
    case MAKE_PLAYER_MOVE:
      return {
        ...state,
        matchsticksAmount: state.matchsticksAmount - state.matchsticksForCurrentMove,
        userScore: state.userScore + state.matchsticksForCurrentMove,
        player: state.matchsticksAmount - state.matchsticksForCurrentMove > 0 ? 'ai' : 'user',
        matchsticksForCurrentMove: 0,
      };
    case MAKE_AI_MOVE:
      const matchsticksPerMoveForAI = state.matchsticksAmount > state.matchsticksPerMove ?
        state.matchsticksPerMove : state.matchsticksAmount;
      // We want to do AI move in one render, that's why we store matchsticks number as a local variable
      const matchsticksForAIMove = calculateAIMove(state.matchsticksAmount, matchsticksPerMoveForAI, state.aiScore);
      return {
        ...state,
        matchsticksAmount: state.matchsticksAmount - matchsticksForAIMove,
        aiScore: state.aiScore + matchsticksForAIMove,
        player: 'user',
        matchsticksForCurrentMove: 0,
      };
    case RESET_GAME_STATE:
      return action.initGameState;
    default:
      return state;
  }
}
