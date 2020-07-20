import React, {useContext} from "react";
import {GameContext} from "../../contexts/GameContext";
import {incrementDecrementOptions} from "../../utils/incrementDecrementOptions";

const MoveConfig = () => {
  const { gameData, incrementDecrementOption } = useContext(GameContext);
  const { matchsticksAmount, matchsticksPerMove, matchsticksForCurrentMove, player } = gameData;

  const decrementMoveButton = matchsticksForCurrentMove > 0 && player === 'user' ? (
    <button onClick={() => incrementDecrementOption(incrementDecrementOptions.DECREMENT_CURRENT_MOVE)}>-</button>
  ) : (
    <button disabled>-</button>
  );
  const incrementMoveButton = matchsticksForCurrentMove <= matchsticksPerMove
    && player === 'user'
    && matchsticksForCurrentMove < matchsticksAmount ? (
    <button onClick={() => incrementDecrementOption(incrementDecrementOptions.INCREMENT_CURRENT_MOVE)}>+</button>
  ) : (
    <button disabled>+</button>
  );

  return (
    <div className='move-config'>
      <p>Set matchsticks number for current move</p>
      {decrementMoveButton}
      <span>{matchsticksForCurrentMove}</span>
      {incrementMoveButton}
    </div>
  );
}

export default MoveConfig;
