import React, { useEffect, useState } from 'react';

const Countdown = ({ time, reverse, direction, callback }) => {
    const [clockwiseTime, setClockwiseTime] = useState(time);
    const [anticlockwiseTime, setAnticlockwiseTime] = useState(reverse);
    let timer;
    let rev;

    useEffect(() => {
        if (direction === 'clockwise') {
            timer = setInterval(() => {
                setClockwiseTime((prevTime) => {
                    if (prevTime + 1 >= 30) {
                        clearInterval(timer);
                        callback();
                    }
                    return prevTime + 1;
                });
            }, 1000);
        } else if (direction === 'anticlockwise') {
            rev = setInterval(() => {
                setAnticlockwiseTime((prevReverse) => {
                    if (prevReverse - 1 === 0) {
                        clearInterval(rev);
                        callback();
                    }
                    return prevReverse - 1;
                });
            }, 1000);
        }

        return () => {
            clearInterval(timer);
            clearInterval(rev);
        };
    }, [direction, callback]);

    return (
        <div>
            <p>clockwisetime: {clockwiseTime} second</p>
            <p>anticlockwise: {anticlockwiseTime} second</p>
        </div>
    );
};

export default Countdown;






