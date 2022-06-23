import React, { useState } from "react";
import "./clock.css";

function Clock() {
  const [timer, setTimer] = useState();

  setInterval(() => {
    let time = new Date().toLocaleTimeString();
    setTimer(time);
  });

  return (
    <div className="container">
      <p className="clock">{timer}</p>
    </div>
  );
}

export default Clock;
