import React from 'react';
import './App.css';
import ConfigContextProvider from "./contexts/ConfigContext";
import GameContextProvider from "./contexts/GameContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GamePage from "./components/Game/GamePage";
import ConfigPage from "./components/Config/ConfigPage";

function App() {
  return (
    <ConfigContextProvider>
      <GameContextProvider>
        <div className="App">
          <Router>
            <Route exact path='/' component={ConfigPage}/>
            <Route exact path='/start/' component={GamePage} />
          </Router>
        </div>
      </GameContextProvider>
    </ConfigContextProvider>
  );
}

export default App;
