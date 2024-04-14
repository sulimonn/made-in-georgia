import React from 'react';

import { Box } from '@mui/material';

import LoyaltyPic from 'assets/images/loyalty.png';

const Loyalty = () => {
  return (
    <Box
      id="loyalty"
      display="flex"
      justifyContent="center"
      alignItems="center"
      pt={{ xs: 7, sm: 10 }}
      pb={{ xs: 7, sm: 5 }}
    >
      <Box width={{ xs: '75%', lg: '60%' }} sx={{ borderRadius: 4, overflow: 'hidden' }}>
        <img
          src={LoyaltyPic}
          alt="loyalty"
          style={{ width: '100%', objectFit: 'contain' }}
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

export default Loyalty;
