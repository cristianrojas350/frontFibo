import React, { useState } from "react";
import "./clock.css";

function Clock() {
  // const [timer, setTimer] = useState();
  const [year, setYear] = useState();
  const [timer, setTimer] = useState();
  const [hours, setHour] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [days, setDays] = useState();
  const [months, setMonths] = useState();
  const [monthDates, setMonthDate] = useState();

  setInterval(() => {
    let date = new Date();
    let year = date.getFullYear();
    setYear(year);
    let hour = date.getHours();
    setHour(hour);
    let minute = date.getMinutes();
    setMinutes(minute);
    let second = date.getSeconds();
    setSeconds(second);
    let day = date.getDay();
    setDays(day);
    let month = date.getMonth();
    setMonths(month);
    let monthDate = date.getDate();
    setMonthDate(monthDate);
  });

  return (
    <div className="container">
      <p className="year">{year}</p>
      <div className="hours">{hours}</div>
      <div className="minutes">{minutes}</div>
      <div className="second">{seconds}</div>
      <div className="day">{days}</div>
      <div className="month">{months}</div>
      <div className="monthDate">{monthDates}</div>
    </div>
  );
}

export default Clock;
