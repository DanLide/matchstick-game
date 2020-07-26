import React, {createContext, useReducer} from "react";
import {configReducer} from "../reducers/configReducer";

export const ConfigContext = createContext();

const initConfig = {
  firstMove: 'user',
  n: 0,
  m: 0,
}

const ConfigContextProvider = (props) => {
  const [config, dispatch] = useReducer(configReducer, initConfig);
  return (
    <ConfigContext.Provider value={{ config, dispatch, initConfig }}>
      {props.children}
    </ConfigContext.Provider>
  );
}

export default ConfigContextProvider;
