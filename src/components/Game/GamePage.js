import React, {useContext, useEffect} from "react";
import Matchstick from "./Matchstick";
import Header from "../Page/Header";
import ExitGame from "./ExitGame";
import {useHistory} from "react-router-dom";
import GameController from "./GameController";
import {GameContext} from "../../contexts/GameContext";

const GamePage = () => {
  const { config } = useContext(GameContext);
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
