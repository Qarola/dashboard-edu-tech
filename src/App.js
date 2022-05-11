import React from "react";
import Home from "./components/Home/Home";
import PlayersState from "./context/playerContext/playersState";
import "./App.css";

function App() {
  return (
    <PlayersState>
      <Home />
    </PlayersState>
  );
}

export default App;
