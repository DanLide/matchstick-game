import React from 'react';
import './App.css';
import ConfigContextProvider from "./contexts/ConfigContext";
import GameConfig from "./components/GameConfig";
import Header from "./components/Header";
import Matchstick from "./components/Matchstick";

function App() {
  return (
    <div className="App">
      <Header />
      <ConfigContextProvider>
        <GameConfig />
      </ConfigContextProvider>
    </div>
  );
}

export default App;
