import React, {useContext, useEffect} from "react";
import Matchstick from "./Matchstick";
import Header from "../Page/Header";
import {ConfigContext} from "../../contexts/ConfigContext";
import ExitGame from "./ExitGame";
import {useHistory} from "react-router-dom";
import GameController from "./GameController";

const GamePage = () => {
  const { config } = useContext(ConfigContext);
  let history = useHistory();

  useEffect(() => {
    if (config.m === 0) { history.push('/') }
  }, [config.m, history]);

  return (
    <div className='game-page'>
      <Header />
      <Matchstick />
      <GameController />
      <ExitGame />
    </div>
  );
}

export default GamePage;
