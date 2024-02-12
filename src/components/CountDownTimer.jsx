import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState(600);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-6xl md:text-8xl lg:text-8xl text-gradient">
        {formatTime(timeRemaining)}
      </div>
    </div>
  );
}

export default CountdownTimer;
