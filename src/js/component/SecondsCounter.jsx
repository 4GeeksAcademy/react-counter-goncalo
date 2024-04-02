import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faPlay,
  faPause,
  faCircleStop,
} from "@fortawesome/free-solid-svg-icons";

const SecondsCounter = () => {
  const [counter, setCounter] = useState("000000"); // Set the increase Counter initial value
  const [isRunning, setIsRuning] = useState(false);
  const [increaseInterval, setIncreaseInterval] = useState(null);

  const increaseCounter = () => {
    if (isRunning === false && counter === "000000") {
      setIsRuning(true);
      const intervalId = setInterval(() => {
        setCounter((prevCount) => {
          const nextCount = Number(prevCount) + 1;
          return nextCount.toString().padStart(6, "0");
        });
      }, 1000);
      setIncreaseInterval(intervalId);
    }
  };

  const displayCounter = () => {
    return counter.split("").map((digit, index) => (
      <div key={index} className="digit">
        <b>{digit}</b>
      </div>
    ));
  };

  const pauseResume = () => {
    if (!isRunning && counter !== "000000") {
      setIsRuning(true);
      const intervalId = setInterval(() => {
        setCounter((prevCount) => {
          const nextCount = Number(prevCount) + 1;
          return nextCount.toString().padStart(6, "0");
        });
      }, 1000);
      setIncreaseInterval(intervalId);
    } else {
      setIsRuning(false);
      clearInterval(increaseInterval);
    }
  };
  const reset = () => {
    setIsRuning(false);
    clearInterval(increaseInterval);
    setCounter("000000");
  };

  return (
    <>
      <div className="counter-container">
        <FontAwesomeIcon icon={faClock} className="icon" />
        <div className="counter">{displayCounter()}</div>
      </div>
      <div className="buttons-container">
        <button onClick={increaseCounter}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button onClick={pauseResume}>
          <FontAwesomeIcon icon={faPause} />
        </button>
        <button onClick={reset}>
          <FontAwesomeIcon icon={faCircleStop} />
        </button>
      </div>
    </>
  );
};

export default SecondsCounter;
