import React, { useState } from "react";

function App() {
  const [displayTime, setDisplayTime] = useState(5);
  const [breakLength, setBreakLength] = useState(3);
  const [sessionLength, setSessionLength] = useState(5);
  const [timerOn, setTimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);

  function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let second = time % 60;
    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (second < 10 ? "0" + second : second)
    );
  }

  function handleClick(amount, type) {
    console.log(breakLength, amount);
    if (breakLength === 0 && amount === -1 * 60 && type === "break") {
      return;
    }
    if (type === "break") {
      setBreakLength((prev) => prev + amount);
    }
    if (sessionLength === 0 && amount === -1 * 60 && type === "session") {
      return;
    }
    if (type === "session") {
      setSessionLength((prev) => prev + amount);
      if (!timerOn) {
        setDisplayTime(sessionLength + amount);
      }
    }
  }

  function controlTime() {
    //i'm not fully understanding this yet, so need to revisit this.
    let second = 1000; // 1000ms = 1 sec
    let date = new Date().getTime(); //get the date and time
    let nextDate = new Date().getTime() + second;
    let onBreakVariable = onBreak;
    if (!timerOn) {
      let interval = setInterval(() => {
        date = new Date().getTime(); //get date
        if (date > nextDate) {
          setDisplayTime((prev) => {
            if (prev <= 0 && !onBreakVariable) {
              //playBreakSound();
              onBreakVariable = true;
              setOnBreak(true);
              console.log("BREAK", breakLength, onBreakVariable);
              return breakLength;
            } else if (prev <= 0 && onBreakVariable) {
              //playBreakSound();
              onBreakVariable = false;
              setOnBreak(false);
              console.log("SESSION", sessionLength);
              return sessionLength;
            }
            return prev - 1;
          });
          nextDate += second;
        }
      }, 30); //update every 30 millisecond
      localStorage.clear();
      localStorage.setItem("interval-id", interval);
    }
    if (timerOn) {
      clearInterval(localStorage.getItem("interval-id"));
    }
    setTimerOn(!timerOn);
  }

  function resetTime() {
    setDisplayTime(25 * 60);
    setBreakLength(5 * 60);
    setSessionLength(25 * 60);
  }

  return (
    <div className="App">
      <Length
        title={"break length"}
        changeTime={handleClick}
        type={"break"}
        timeSetting={breakLength}
        formatTime={formatTime}
      />
      <Length
        title={"session length"}
        changeTime={handleClick}
        type={"session"}
        timeSetting={sessionLength}
        formatTime={formatTime}
      />
      <label id="timer-label">Session</label>
      <div id="time-left">{formatTime(displayTime)}</div>
      <input type="button" value="Start/Stop" onClick={controlTime}></input>
      <input type="button" value="reset" onClick={resetTime}></input>
    </div>
  );
}

function Length({ title, changeTime, type, timeSetting, formatTime }) {
  return (
    <div>
      <label id="break-label">{title}</label>
      <div className="break-button">
        <input
          type="button"
          id="break-decrement"
          value="-"
          onClick={() => changeTime(-1 * 60, type, timeSetting)}
        ></input>
        {formatTime(timeSetting)}
        <input
          type="button"
          id="break-increment"
          value="+"
          onClick={() => changeTime(1 * 60, type, timeSetting)}
        ></input>
      </div>
    </div>
  );
}

export default App;
