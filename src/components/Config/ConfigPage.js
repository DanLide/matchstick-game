import React from "react";
import Header from "../Page/Header";
import GameConfig from "./GameConfig";
import StartGame from "./StartGame";

const ConfigPage = () => {
  return (
    <div className='config-page'>
      <Header />
      <GameConfig />
      <StartGame />
    </div>
  );
}

export default ConfigPage;
