import { useEffect, useState } from 'react';
import { TimeLeft } from '../types';

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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto my-12">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-white transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-rose-500 to-pink-600 bg-clip-text text-transparent mb-2 font-serif">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-gray-600 text-sm md:text-base font-semibold uppercase tracking-wider">
              {unit.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
