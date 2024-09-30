import React, { useState, useEffect } from "react";

// FUNCTION CountdownTimer(initialMinutes, initialSeconds):
//     INITIALIZE minutes as initialMinutes
//     INITIALIZE seconds as initialSeconds

//     FUNCTION startTimer():
//         SET interval to run every 1 second:
//             IF seconds > 0:
//                 DECREMENT seconds by 1
//             ELSE IF minutes > 0:
//                 DECREMENT minutes by 1
//                 SET seconds to 59
//             IF minutes == 0 AND seconds == 0:
//                 CLEAR interval (stop timer)

//     FUNCTION cleanup():
//         CLEAR interval to stop the timer

//     WHEN component mounts:
//         CALL startTimer()

//     WHEN component unmounts:
//         CALL cleanup()

//     FORMAT minutes and seconds to always display two digits
//     DISPLAY the formatted time as "minutes:seconds"

const CountdownTimer = ({ initialMinutes=4, initialSeconds=30 }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    if (minutes === 0 && seconds === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Countdown Timer
        </h2>
        <div className="text-6xl font-mono text-indigo-600">
          {`${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
