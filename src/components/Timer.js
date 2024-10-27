import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

const timerStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
    margin: '1rem 0'
};

const TimerComponent = () => {
    const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={timerStyle}>
            Current Time: {currentTime}
        </div>
    );
};

class Timer {
    constructor(el) {
        ReactDOM.render(<TimerComponent />, el);
    }
}

export default Timer;
