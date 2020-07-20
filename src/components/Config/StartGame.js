import React, {useContext} from "react";
import {useHistory} from "react-router-dom";
import {ConfigContext} from "../../contexts/ConfigContext";

const StartGame = () => {
  let history = useHistory();
  const { config } = useContext(ConfigContext);

  return config.n > 0 && config.m > 0 && config.n >= config.m ? (
    <button className='game-start' onClick={() => history.push('/start/')}>Start the game</button>
  ) : (
    <button className='game-start' disabled>Start the game</button>
  );
}

export default StartGame;