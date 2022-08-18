/** @format */

import "./App.css";
import React, { useState } from "react";
import Child from "./components/Child";

function App() {
  const [nome, setNome] = useState("Paulo");

  return (
    <div className="App">
      <h3>Componente Pai</h3>
      <button onClick={() => setNome("João")}>Alterar</button>
      <hr />
      <Child />
      <p>Nome: {nome}</p>
    </div>
  );
}

export default App;
