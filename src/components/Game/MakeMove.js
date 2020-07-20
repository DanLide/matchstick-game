import React, {useContext} from "react";
import {GameContext} from "../../contexts/GameContext";

const MakeMove = () => {
  const { gameData, makeMove } = useContext(GameContext);
  const makeMoveButton = gameData.player === 'user' ? (
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
