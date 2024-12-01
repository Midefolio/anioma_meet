/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { countdownToMeeting } from "../utils/useutils";

const LiveCountdown: React.FC<{ meetingDate: string; meetingTime: string }> = ({ meetingDate, meetingTime }) => {
  const [countdown, setCountdown] = useState<any>(null);

  useEffect(() => {
    const updateCountdown = () => {
      const result = countdownToMeeting(meetingDate, meetingTime);
      setCountdown(result);
    };

    // Initial countdown
    updateCountdown();
    
    // Update countdown every second
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [meetingDate, meetingTime]);

  return (
    <>
      {countdown ? (
        countdown.days !== undefined ? (
          <span>
            {countdown.days}d : {countdown.hours}h : {countdown.minutes}m : {countdown.seconds}s
          </span>
        ) : (
          <span>{countdown}</span>
        )
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
};


export default LiveCountdown;
