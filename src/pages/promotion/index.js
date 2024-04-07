import React from 'react';
import Promo1 from 'assets/images/promotions/promo1.png';
import Promo2 from 'assets/images/promotions/promo2.png';

import { Box, Typography, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Promotion = () => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  const images = [Promo1, Promo2];
  return (
    <Box id="promotions" px={{ xs: 0, sm: 2 }} my={1}>
      <Typography
        variant={matchDownMD ? 'h2' : 'h1'}
        sx={{ textAlign: { xs: 'center', sm: 'left' } }}
      >
        Акционные предложения
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 10 }} pt={6}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} key={index} sx={{ overflow: 'hidden' }}>
            <img src={image} alt="imag" style={{ width: '100%' }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Promotion;
