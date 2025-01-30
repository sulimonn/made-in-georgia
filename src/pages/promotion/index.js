import React from 'react';
import { useDispatch } from 'react-redux';
import Promo1 from 'assets/images/promotions/promo1.jpg';
import Promo2 from 'assets/images/promotions/promo2.jpg';

import { Box, Typography, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { activeItem } from 'store/reducers/nav';

const Promotion = () => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  const images = [Promo1, Promo2];

  const dispatch = useDispatch();
  const formRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(activeItem({ openItem: 'promotions' }));
        }
      },
      {
        threshold: 0.4,
      },
    );

    const currentFormRef = formRef.current;

    if (currentFormRef) {
      observer.observe(currentFormRef);
    }

    return () => {
      if (currentFormRef) {
        observer.unobserve(currentFormRef);
      }
    };
  }, [formRef, dispatch]);
  return (
    <Box id="promotions" px={{ xs: 0, sm: 2 }} my={1} ref={formRef}>
      <Typography
        variant={matchDownMD ? 'h2' : 'h1'}
        sx={{
          textAlign: { xs: 'center', sm: 'left' },
          width: '100%',
          mx: 'auto',
          maxWidth: '1200px',
        }}
      >
        Акции
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 10 }} pt={6}>
        {images.map((image, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={index}
            sx={{ overflow: 'hidden', maxHeight: { xs: '300px', sm: 550 } }}
          >
            <img
              src={image}
              alt="promotion"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              loading="lazy"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Promotion;
