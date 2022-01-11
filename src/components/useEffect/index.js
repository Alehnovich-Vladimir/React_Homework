import React, { useEffect, useState } from "react";
import "./index.css";

const TimePicker = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (hours > 23) {
      setHours(0);
    } else if (hours < 0) {
      setHours(23);
    }

    if (minutes > 59) {
      setMinutes(0);
      setHours(hours + 1);
    } else if (minutes < 0) {
      setMinutes(59);
      setHours(hours - 1);
    }
  }, [hours, minutes]);

  return (
    <div className="timer">
      <div className="timer-hours">
        <div className="hours-counter">{hours < 10 ? '0' : ''}{hours}</div>
        <button className="btn-m" onClick={() => setHours(hours - 1)}>-</button>
        <button className="btn-p" onClick={() => setHours(hours + 1)}>+</button>
      </div>
      <div className="dots">:</div>
      <div className="timer-minutes">
        <div className="minutes-counter">{minutes < 10 ? '0' : ''}{minutes}</div>
        <button className="btn-m" onClick={() => setMinutes(minutes - 1)}>-</button>
        <button className="btn-p" onClick={() => setMinutes(minutes + 1)}>+</button>
      </div>
    </div>
  );
};

export default TimePicker;