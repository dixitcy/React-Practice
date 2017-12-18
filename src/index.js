import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Todos from "./Todos";
import './App.css'

const App = () => {
  return (
    <div>
      <Todos />
    </div>
  );
};

render(<App />, document.getElementById("root"));
