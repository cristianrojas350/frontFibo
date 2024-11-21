import React, { createContext, useState, useEffect, useContext } from 'react';

const ClockContext = createContext();

export const useClock = () => {
  return useContext(ClockContext);
};

export const ClockProvider = ({ children }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <ClockContext.Provider value={time}>{children}</ClockContext.Provider>;
};
