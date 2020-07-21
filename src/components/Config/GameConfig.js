import React, {useContext} from "react";
import {ConfigContext} from "../../contexts/ConfigContext";
import {incrementDecrementOptions} from "../../utils/incrementDecrementOptions";

const GameConfig = () => {
  const { config, incrementDecrementOption, setFirstMove } = useContext(ConfigContext);
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

  return (
    <div className='game-config'>
      <h3>Choose your destiny</h3>
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
        <select name='firstMove' defaultValue='user' onChange={ (e) => setFirstMove(e.target.value) }>
          <option value='user'>User</option>
          <option value='ai'>AI</option>
        </select>
      </div>
    </div>
  );
}

export default GameConfig;
