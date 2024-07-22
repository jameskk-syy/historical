import React, { useState, useEffect } from 'react';
import CircularProgressBar from './CircularProgressBar';
import { Typography } from '@mui/material';

export default function CircularProgressBarApp() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      setProgress(100)
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '16px' }}>
        <CircularProgressBar  style={{ color: '#fff'}} progress={progress} />
      </div>
    </div>
  );
}
