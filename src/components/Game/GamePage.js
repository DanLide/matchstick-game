import React, {useContext, useEffect} from "react";
import Matchstick from "./Matchstick";
import Header from "../Page/Header";
import {GameContext} from "../../contexts/GameContext";
import {ConfigContext} from "../../contexts/ConfigContext";
import ExitGame from "./ExitGame";
import {useHistory} from "react-router-dom";

const GamePage = () => {
  const { setGameData } = useContext(GameContext);
  const { config } = useContext(ConfigContext);
  let history = useHistory();

  useEffect(() => {
    if (config.m === 0) { history.push('/') }
    setGameData({ matchsticksAmount: 2*config.n + 1, matchsticksPerMove: config.m, player: config.firstMove });
  }, [config, setGameData, history]);

  return (
    <div className='game-page'>
      <Header />
      <Matchstick />
      <ExitGame />
    </div>
  );
}

export default GamePage;
