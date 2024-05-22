import React from 'react';
import { useDispatch } from 'react-redux';
import Marquee from 'react-double-marquee';
import IntroPic from 'assets/images/intro.jpg';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Logo from 'components/Logo/Logo';
import { activeItem } from 'store/reducers/nav';

const Intro = () => {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.up('sm'), {});

  const dispatch = useDispatch();
  const formRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(activeItem({ openItem: 'home' }));
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
    <Box
      id="home"
      ref={formRef}
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        height: { xs: 'calc(100vh - 80px)', md: 'calc(100vh - 120px)' },
        mt: { xs: '80px', md: '120px' },
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
          objectPosition: 'left',
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
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '0%',
          width: '100%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          backgroundColor: '#00000060',
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <Marquee direction="left">
          <Typography
            sx={{
              px: { xs: 3, sm: 0 },
              whiteSpace: 'nowrap', // Ensure the text does not wrap
              display: 'inline-block', // Ensure text remains inline
            }}
            fontSize={{ xs: '1.5rem', sm: '1.9rem', md: 'calc(100vw * 0.02)' }}
            color="error"
            textAlign="center"
            textTransform="uppercase"
          >
            блюда с исконно - грузинским акцентом по старинным рецептам
          </Typography>
        </Marquee>
      </Box>
    </Box>
  );
};

export default Intro;
