import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const tickerAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-25.1%);
  }
`;

const TickerText = ({ children: text }) => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        width: 'min-content',
      }}
    >
      <Typography
        component="span"
        sx={{
          display: 'inline-block',
          width: 'min-content',
          animation: `${tickerAnimation} 10s linear infinite`,
        }}
      >
        {text} &nbsp;&nbsp;&nbsp;&nbsp; {text} &nbsp;&nbsp;&nbsp;&nbsp; {text}{' '}
        &nbsp;&nbsp;&nbsp;&nbsp; {text}
      </Typography>
    </Box>
  );
};

export default TickerText;
