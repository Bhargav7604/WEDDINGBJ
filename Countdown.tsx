import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const weddingDate = new Date('2026-02-22T11:55:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto my-12">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-rose-100 transform hover:scale-105 transition-transform"
        >
          <div className="text-4xl md:text-5xl font-bold text-rose-600 mb-2 font-serif">
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div className="text-gray-600 text-sm md:text-base font-medium uppercase tracking-wider">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
