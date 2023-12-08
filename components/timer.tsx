'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Timer({ targetTime }: { targetTime: number }) {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference > 0) {
      const daysToHours = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + daysToHours * 24;
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { hours, minutes, seconds };
    } else {
      return { hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetTime]);

  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-bold text-3xl'>염겨레님의 퇴근은...</h1>
      <Image src='/main.jpg' alt='Let us see occasionally' width={300} height={500}/>
      <p>
        <span className='font-bold text-red-600'>{`${timeLeft.hours}`}</span>시간
        <span className='font-bold text-red-600'>{` ${timeLeft.minutes}`}</span>분
        <span className='font-bold text-red-600'>{` ${timeLeft.seconds}`}</span>초...
      </p>
    </div>
  )
}