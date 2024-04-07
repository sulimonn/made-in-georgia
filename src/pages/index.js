import React from 'react';
import Intro from './Intro';
import Promotion from './promotion';
import Loyalty from './Loyalty';

// mui
import { Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Panoram from 'assets/images/панорама.png';
import Menu from './menu';
import Delivery from './Delivery';

const Pages = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Intro />
      <Promotion />
      <Loyalty />
      <Typography
        sx={{ px: { xs: 3, sm: 0 } }}
        variant={isSmallScreen ? 'h4' : 'h1'}
        color="error"
        textAlign="center"
        textTransform="uppercase"
      >
        блюда с исконно - грузинским акцентом по старинным рецептам.
      </Typography>
      <Box py={{ xs: 3, sm: 10 }}>
        <img src={Panoram} alt="panoram" style={{ width: '100%', objectFit: 'contain' }} />
      </Box>
      <Menu />
      <Delivery />
    </>
  );
};

export default Pages;
