import React from 'react';
import { useDispatch } from 'react-redux';

import { Box, Typography, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { activeItem } from 'store/reducers/nav';

const Promotion = ({ promo: promos = [] }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const dispatch = useDispatch();
  const formRef = React.useRef(null);
  console.log(promos);

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
        {promos.map((promo, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={index}
            sx={{ overflow: 'hidden', maxHeight: { xs: '300px', sm: 550 } }}
          >
            <img
              src={'/media/' + promo.photo_url}
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
