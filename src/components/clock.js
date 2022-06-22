import React, { useState } from "react";

function Clock() {
  const [timer, setTimer] = useState();

  setInterval(() => {
    let time = new Date().toLocaleTimeString();
    setTimer(time);
  });

  return <p>{timer}</p>;
}

export default Clock;
