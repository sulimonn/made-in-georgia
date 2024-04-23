import React from 'react';
import Marquee from 'react-double-marquee';
import IntroPic from 'assets/images/intro.png';
import { Box, Typography, useMediaQuery } from '@mui/material';
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
        loading="eager|lazy"
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
          pb: 30,
          width: { xs: 200, sm: 300, lg: 400 },
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
          bottom: '1%',
          width: '100%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          backgroundColor: '#00000060',
        }}
      >
        <Marquee direction="left">
          <Typography
            sx={{
              px: { xs: 3, sm: 0 },
              whiteSpace: 'nowrap', // Ensure the text does not wrap
              display: 'inline-block', // Ensure text remains inline
            }}
            fontSize={{ xs: '1.5rem', sm: '2rem', md: 'calc(100vw * 0.025)' }}
            color="error"
            textAlign="center"
            textTransform="uppercase"
          >
            блюда с исконно - грузинским акцентом по старинным рецептам.
          </Typography>
        </Marquee>
      </Box>
    </Box>
  );
};

export default Intro;
