import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import React from "react";
import Recette from "./components/recette";

function App() {
  return (
    <div className="App">
      <Main />
        <Recette />
    </div>
  );
}

export default App;
