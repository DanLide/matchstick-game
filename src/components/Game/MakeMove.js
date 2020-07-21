import React, {useContext, useEffect} from "react";
import {GameContext} from "../../contexts/GameContext";

const MakeMove = () => {
  const { gameData, makeMove } = useContext(GameContext);
  const { player, matchsticksForCurrentMove } = gameData;

  useEffect(() => {
   if (player === 'ai') {
     setTimeout(() => makeMove(), 1500);
   }
  }, [player, makeMove]);

  const makeMoveButton = player === 'user' && matchsticksForCurrentMove > 0 ? (
    <button onClick={makeMove}>Make a move</button>
  ) : (
    <button disabled>Make a move</button>
  );
  return (
    <div className='make-move'>
      {makeMoveButton}
    </div>
  );
}

export default MakeMove;
