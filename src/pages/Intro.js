import React from 'react';

import IntroPic from 'assets/images/intro.png';
import { Box, Typography, Button } from '@mui/material';
import Logo from 'components/Logo/Logo';

const Intro = () => {
  return (
    <Box
      id="home"
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <img
        src={IntroPic}
        alt="intro"
        loading="lazy"
        style={{
          opacity: 0.4,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'left',
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
          target="_blank"
          component="a"
          href="https://wa.me/+79037773433"
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
