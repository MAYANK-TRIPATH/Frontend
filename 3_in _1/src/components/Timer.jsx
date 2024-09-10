import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const time = setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);

    
    return () => clearInterval(time);
  }, []);


  return (
    <div >
      Current Time: {timer}
    </div>
  );
};

export default Timer;
