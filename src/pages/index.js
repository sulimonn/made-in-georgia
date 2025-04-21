import React from 'react';
import Promotion from './promotion';
import Loyalty from './Loyalty';

// mui
import { Box } from '@mui/material';

import Panoram from 'assets/images/панорама.jpg';
import Menu from './menu';
import Delivery from './Delivery/index';
import Intro from './Intro';

const Pages = () => {
  return (
    <>
      <Intro />
      <Promotion />
      <Loyalty />
      <Box py={{ xs: 3, sm: 10 }}>
        <img
          src={Panoram}
          alt="panoram"
          style={{ width: '100%', objectFit: 'contain', opacity: 0.7 }}
          loading="lazy"
        />
      </Box>
      <Menu />
      <Delivery />
    </>
  );
};

export default Pages;
