import React from 'react';

import IntroPic from 'assets/images/intro.png';
import { Box, Typography, Button } from '@mui/material';
import Logo from 'components/Logo/Logo';

const Intro = () => {
  return (
    <Box
      id="home"
      sx={{
        height: { xs: 'calc(100vh - 10rem)', lg: 'calc(100vh - 7rem)' },
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <img
        src={IntroPic}
        alt="intro"
        style={{
          opacity: 0.4,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          pl: 2,
          pb: 20,
          width: { sm: 300, lg: 400 },
          height: 'min-content',
        }}
      >
        <Logo />
        <Typography
          variant="h1"
          color="text.primary"
          textAlign="center"
          textTransform="uppercase"
          fontWeight="500"
        >
          РЕСТОРАН
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          size="large"
          color="error"
          sx={{ display: { xs: 'none', lg: 'block' }, pb: 1, pt: 0.5, px: 4, borderRadius: 3 }}
        >
          <Typography variant={'h2'} fontWeight="400" textTransform="none">
            Заказать стол
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Intro;
