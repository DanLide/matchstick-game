import React, {useContext} from "react";
import {ConfigContext} from "../../contexts/ConfigContext";
import {incrementDecrementOptions} from "../../utils/incrementDecrementOptions";
import { useHistory } from "react-router-dom";

const GameConfig = () => {
  const { config, incrementDecrementOption, setFirstMove } = useContext(ConfigContext);
  let history = useHistory();

  const decrementNButton = config.n > 0 ? (
    <button onClick={() => incrementDecrementOption(incrementDecrementOptions.DECREMENT_N)}>-</button>
  ) : (
    <button disabled>-</button>
  );
  const decrementMButton = config.m > 0 ? (
    <button onClick={() => incrementDecrementOption(incrementDecrementOptions.DECREMENT_M)}>-</button>
  ) : (
    <button disabled>-</button>
  );
  const startGameButton = config.n > 0 && config.m > 0 && config.n >= config.m ? (
    <button className='game-start' onClick={() => history.push('/start/')}>Start the game</button>
  ) : (
    <button className='game-start' disabled>Start the game</button>
  );

  return (
    <div className='game-config'>
      <h2>Choose your destiny</h2>
      <div>
        <p>Set n option</p>
        {decrementNButton}
        <span>{ config.n }</span>
        <button onClick={() => incrementDecrementOption(incrementDecrementOptions.INCREMENT_N)}>+</button>
      </div>
      <div>
        <p>Set m option</p>
        {decrementMButton}
        <span>{ config.m }</span>
        <button onClick={() => incrementDecrementOption(incrementDecrementOptions.INCREMENT_M)}>+</button>
      </div>
      <div>
        <p>Choose who moves first</p>
        <select name='firstMove' onChange={ (e) => setFirstMove(e.target.value) }>
          <option value='user' selected>User</option>
          <option value='ai'>AI</option>
        </select>
      </div>
      {startGameButton}
    </div>
  );
}

export default GameConfig;
