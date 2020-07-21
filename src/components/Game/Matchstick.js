import React, {useContext} from "react";
import matchstick from '../../assets/images/matchstick.png';
import {GameContext} from "../../contexts/GameContext";

const Matchstick = () => {
  const { gameData } = useContext(GameContext);
  const { matchsticksAmount, matchstickWidth } = gameData;
  const matchsticks = [];
  for (let i = 0; i < matchsticksAmount; i++) {
    matchsticks.push(
      <li className='matchstick-list-item' style={{ width: `${ matchstickWidth }%` }} key={i} >
        <img src={ matchstick }  alt='matchstick' />
      </li>
    );
  }
  return (
    <div className='matchstick'>
      <div className='matchstick-counter'>
        <span>{`x${gameData.matchsticksAmount}`}</span>
      </div>
      <ul className='matchstick-list'>
        {matchsticks}
      </ul>
    </div>
  );
}

export default Matchstick;
