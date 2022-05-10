import React from 'react';
import './App.css';
//import Home from './components/Home/Home';
import PlayersState from './context/Player/PlayerContext';

const App = () =>  {
  return (
    <PlayersState>
  {/*     <Home /> */}
    </PlayersState>
  );
}

export default App;
