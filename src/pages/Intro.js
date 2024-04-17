import React from 'react';

import IntroPic from 'assets/images/intro.png';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Logo from 'components/Logo/Logo';

const Intro = () => {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.up('sm'), {});
  return (
    <Box
      id="home"
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <img
        src={IntroPic}
        alt="intro"
        loading="lazy"
        style={{
          opacity: 0.4,
          width: isSM ? '100%' : '120%',
          height: isSM ? '100%' : '120%',
          objectFit: 'cover',
          objectPosition: 'left bottom',
          position: 'absolute',
          bottom: 0,
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
          href="https://wa.me/+79161366868"
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
