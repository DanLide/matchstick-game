import React, {createContext, useState} from "react";
import {incrementDecrementOptions} from "../utils/incrementDecrementOptions";

export const ConfigContext = createContext();

const ConfigContextProvider = (props) => {
  const [config, setConfig] = useState({
    firstMove: 'user',
    n: 0,
    m: 0,
  });
  const incrementDecrementOption = (option) => {
    if (option === incrementDecrementOptions.INCREMENT_N) {
      setConfig({ ...config, n: config.n + 1 });
    } else if (option === incrementDecrementOptions.INCREMENT_M) {
      setConfig({ ...config, m: config.m + 1 });
    } else if (option === incrementDecrementOptions.DECREMENT_N) {
      setConfig({ ...config, n: config.n - 1 })
    } else {
      setConfig({ ...config, m: config.m - 1 });
    }
  }
  const setFirstMove = (selectedUser) => {
    setConfig({ ...config, firstMove: selectedUser });
  }
  const restoreConfigToInit = () => {
    setConfig({ firstMove: 'user', n: 0, m: 0 });
  }
  return (
    <ConfigContext.Provider value={{ config, incrementDecrementOption, setFirstMove, restoreConfigToInit }}>
      {props.children}
    </ConfigContext.Provider>
  );
}

export default ConfigContextProvider;
