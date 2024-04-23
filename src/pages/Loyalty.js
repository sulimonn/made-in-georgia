import React from 'react';

import { Box, Button } from '@mui/material';

import LoyaltyPic from 'assets/images/loyalty.png';

const Loyalty = () => {
  return (
    <Box
      id="loyalty"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      pt={{ xs: 7, sm: 10 }}
      pb={{ xs: 5, sm: 5 }}
      gap={{ xs: 4, sm: 5 }}
    >
      <Box width={{ xs: '90%', lg: '60%' }} sx={{ borderRadius: 4, overflow: 'hidden' }}>
        <img
          src={LoyaltyPic}
          alt="loyalty"
          style={{ width: '100%', objectFit: 'contain' }}
          loading="eager|lazy"
        />
      </Box>
      <Button
        variant="contained"
        component="a"
        href="https://cabinet.statix-pro.ru/forms/made_in_georgia"
        target="_blank"
        color="error"
        sx={{
          borderRadius: 3,
          width: 'fit-content',
          fontSize: { xs: '1.25rem', sm: '2rem' },
          textTransform: 'capitalize',
          py: { xs: 0.5, sm: 0.75 },
        }}
        size="large"
      >
        Стать участником программы
      </Button>
    </Box>
  );
};

export default Loyalty;
