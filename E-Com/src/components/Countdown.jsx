import React, { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-5-23");
    const now = new Date();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white">
      <div className="max-w-screen-lg mx-auto p-8 rounded-lg shadow-lg text-center bg-opacity-90">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          Limited Time Offer
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="flex flex-col items-center bg-white text-indigo-500 rounded-md p-4 w-20 sm:w-24 shadow-md"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                {value}
              </span>
              <span className="uppercase text-xs sm:text-sm lg:text-base font-medium">
                {unit}
              </span>
            </div>
          ))}
        </div>
        <p className="text-sm sm:text-base mt-4 font-light">
          Hurry up! Don’t miss out on this amazing deal.
        </p>
      </div>
    </div>
  );
};

export default Countdown;
