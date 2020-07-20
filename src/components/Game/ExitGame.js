import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import {ConfigContext} from "../../contexts/ConfigContext";
import {GameContext} from "../../contexts/GameContext";

const ExitGame = () => {
  let history = useHistory();
  const { restoreConfigToInit } = useContext(ConfigContext);
  const { restoreGameDataToInit } = useContext(GameContext);

  const exitGame = () => {
    restoreConfigToInit();
    restoreGameDataToInit();
    history.push('/')
  }

  return (
    <div className='exit-game'>
      <button onClick={exitGame}>Exit the game</button>
    </div>
  );
}

export default ExitGame;
