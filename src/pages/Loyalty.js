import React from 'react';

import { Box, Button } from '@mui/material';

import Intro from 'assets/images/intro.png';
import Logo from 'components/Logo/Logo';

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
      <Box
        width={{ xs: '90%', lg: '60%' }}
        height={{ xs: '200px', sm: '300px', md: '400px', lg: '450px' }}
        sx={{ borderRadius: 4, overflow: 'hidden', position: 'relative' }}
        p={{ xs: 2, sm: 3 }}
      >
        <img
          src={Intro}
          alt="loyalty"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'left bottom',
            position: 'absolute',
            inset: 0,
            opacity: 0.5,
            zIndex: 0,
          }}
          loading="eager|lazy"
        />

        <Box width="20%" position="relative" zIndex={1}>
          <Logo />
        </Box>
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
          textTransform: 'none',
          py: { xs: 0.5, sm: 0.75 },
        }}
        size="large"
      >
        Стать участником Программы
      </Button>
    </Box>
  );
};

export default Loyalty;
