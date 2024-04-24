import React from 'react';
import Promotion from './promotion';
import Loyalty from './Loyalty';

// mui
import { Box } from '@mui/material';

import Panoram from 'assets/images/панорама.jpg';
import Menu from './menu';
import Delivery from './Delivery';
import Intro from './Intro';

const Pages = () => {
  return (
    <>
      <Intro />
      <Promotion />
      <Loyalty />
      {/* <Typography
        sx={{ px: { xs: 3, sm: 0 } }}
        variant={isSmallScreen ? 'h4' : 'h1'}
        fontSize={isSmallScreen ? '1.25rem' : 'calc(100vw * 0.03)'}
        color="error"
        textAlign="center"
        textTransform="uppercase"
      >
        блюда с исконно - грузинским акцентом по старинным рецептам.
      </Typography> */}
      <Box py={{ xs: 3, sm: 10 }}>
        <img
          src={Panoram}
          alt="panoram"
          style={{ width: '100%', objectFit: 'contain' }}
          loading="lazy"
        />
      </Box>
      <Menu />
      <Delivery />
    </>
  );
};

export default Pages;
