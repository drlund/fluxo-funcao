/** @format */

import React from "react";

function Child(props) {
  return (
    <div>
      <h3>Componente Filho</h3>
      <span>{props.setState}</span>
    </div>
  );
}

export default Child;
