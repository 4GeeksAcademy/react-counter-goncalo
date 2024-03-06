import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const SecondsCounter = () => {

    const [counter, setCounter] = useState("000000")

    useEffect(() => {
        setInterval(() => {
        setCounter(prevCount => {
            const nextCount = Number(prevCount) + 1; // Convert previous counter to a number and increment
            return nextCount.toString().padStart(6, "0");
        });
        }, 1000);      
      }, []);

    return (
        <div className="counter-container">
            <FontAwesomeIcon icon={faClock} className="icon"/>
            <div className="counter">
                {counter.split('').map((digit, index) => (
                    <div key={index} className="digit"><b>{digit}</b></div>
                ))}
            </div>
        </div>
    )
}

export default SecondsCounter