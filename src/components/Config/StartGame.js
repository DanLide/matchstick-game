import React, {useContext} from "react";
import {useHistory} from "react-router-dom";
import {ConfigContext} from "../../contexts/ConfigContext";
import {GameContext} from "../../contexts/GameContext";

const StartGame = () => {
  let history = useHistory();
  const { config } = useContext(ConfigContext);
  const { loadConfig } = useContext(GameContext);

  const startGame = () => {
    loadConfig(config);
    history.push('/start/')
  }

  return config.n > 0 && config.m > 0 && config.n >= config.m ? (
    <button className='game-start' onClick={startGame}>Start the game</button>
  ) : (
    <button className='game-start' disabled>Start the game</button>
  );
}

export default StartGame;