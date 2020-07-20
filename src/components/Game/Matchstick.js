import React, {useContext} from "react";
import matchstick from '../../assets/images/matchstick.png';
import {GameContext} from "../../contexts/GameContext";

const Matchstick = () => {
  const { gameData } = useContext(GameContext);
  const matchstickWidth = 200/gameData.matchsticksAmount > 10 ? 10 : 250/gameData.matchsticksAmount;
  const matchsticks = [];
  for (let i = 0; i < gameData.matchsticksAmount; i++) {
    matchsticks.push(<img src={ matchstick }  alt='matchstick' style={{ width: `${matchstickWidth}%`, }} />);
  }
  return (
    <div className='matchstick'>
      {matchsticks}
    </div>
  );
}

export default Matchstick;
