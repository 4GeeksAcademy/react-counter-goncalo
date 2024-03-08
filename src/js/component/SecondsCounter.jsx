import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faPlay, faPause, faCircleStop } from '@fortawesome/free-solid-svg-icons';

const SecondsCounter = () => {

    const [counter, setCounter] = useState("000000")  // Set the increase Counter initial value
    const [decCounter, setDecCounter] = useState("999999")  // Set the decrease Counter initial value
      // choose wich counter to display 
    const [showIncreaseCounter, setShowIncreaseCounter] = useState(true)
    const [showIDecCreaseCounter, setShowDecCreaseCounter] = useState(false)
    const [isRunning, setIsRuning] = useState(true)  // Check if the counter is running

    const increaseCounter = () => {
        setShowIncreaseCounter(true)
        setShowDecCreaseCounter(false)   
        if(isRunning) {    
            setInterval(() => {
                setCounter(prevCount => {
                    const nextCount = Number(prevCount) + 1; 
                    return nextCount.toString().padStart(6, "0");
                });
            }, 1000);     
        } 
      }
    
    const decreaseCounter = () => {
        setShowIncreaseCounter(false)
        setShowDecCreaseCounter(true)
       
            setInterval(()=>{
                setDecCounter(prevCount => {
                    const nextCount = Number(prevCount) - 1
                    return nextCount.toString().padStart(6,"9")
                })
            },1000)
        
    }

    const chooseCounter = () => {
        if (showIncreaseCounter){
            return counter.split('').map((digit, index) => (
                <div key={index} className="digit"><b>{digit}</b></div>
            ));
        }
        if (showIDecCreaseCounter) {
            return decCounter.split('').map((digit, index) => (
                <div key={index} className="digit"><b>{digit}</b></div>
            ));
        }       
    }

    const pauseResume = () => {
        setIsRuning(!isRunning)
        console.log(isRunning)
    }

    return (
        <>
            <div className="settings-container">
                <button onClick={increaseCounter}>Increase Counter</button>
                <button onClick={decreaseCounter}>Decrease Counter</button>
            </div>
            <div className="counter-container">
                <FontAwesomeIcon icon={faClock} className="icon"/>
                <div className="counter">
                    {chooseCounter()}
                </div>
            </div>
            <div className="buttons-container">
                <button><FontAwesomeIcon icon={faPlay}/></button>
                <button  onClick={pauseResume}><FontAwesomeIcon icon={faPause}/></button>
                <button><FontAwesomeIcon icon={faCircleStop}/></button>
            </div>
        </>
    )
}

export default SecondsCounter