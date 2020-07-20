import React, {useContext} from "react";
import {GameContext} from "../../contexts/GameContext";

const Header = () => {
  const { gameData } = useContext(GameContext);
  const matchsticksCount = gameData.matchsticksPerMove !== 0 ? (
    <span>{`x${gameData.matchsticksAmount}`}</span>
  ) : undefined;
  return (
    <header>
      <h1>Matchstick-game</h1>
      {matchsticksCount}
    </header>
  );
}

export default Header;
