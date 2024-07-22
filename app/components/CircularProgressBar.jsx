import React from 'react';
import { CircularProgress, Typography } from '@mui/material';

export default function CircularProgressBar({ progress }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress
        variant="determinate"
        value={progress}
        size={130}
        thickness={2}
        style={{color:'#42526d'}}
        
        
      />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Typography variant="h6" component="div" style={{ color: 'textcolor', textAlign: 'center' }}>
          <p className='font-abc'>Achieved</p>
          {`${progress}%`}
        </Typography>
      </div>

    </div>
  );
}
