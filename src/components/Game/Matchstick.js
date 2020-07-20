import React, {useContext} from "react";
import matchstick from '../../assets/images/matchstick.png';
import {GameContext} from "../../contexts/GameContext";

const Matchstick = () => {
  const { gameData } = useContext(GameContext);
  const { matchsticksAmount } = gameData;
  const matchstickWidth = 200/matchsticksAmount > 10 ? 10 : 250/matchsticksAmount;
  const matchsticks = [];
  for (let i = 0; i < matchsticksAmount; i++) {
    matchsticks.push(<img src={ matchstick }  alt='matchstick' style={{ width: `${ matchstickWidth }%` }} key={i} />);
  }
  return (
    <div className='matchstick'>
      {matchsticks}
    </div>
  );
}

export default Matchstick;
