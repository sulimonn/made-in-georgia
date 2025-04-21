import React from 'react';
import { useDispatch } from 'react-redux';

import IntroPic from 'assets/images/intro.jpg';
import { Box, Typography, useMediaQuery, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Logo from 'components/Logo/Logo';
import { activeItem } from 'store/reducers/nav';

<<<<<<< HEAD
const Loyalty = ({ loyalty }) => {
=======
const Loyalty = () => {
>>>>>>> bf8cca8 (Initial commit to second branch)
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.up('sm'), {});
  const dispatch = useDispatch();
  const formRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(activeItem({ openItem: 'loyalty' }));
        }
      },
      {
        threshold: 0.5,
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
      id="loyalty"
      ref={formRef}
      sx={{
        mt: 8,
        mb: 5,
        pb: { xs: 20, sm: 10 },
        pt: { xs: 20, sm: 15, md: 20 },
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        overflow: 'hidden',
        flexWrap: 'wrap',
        gap: { xs: 2, sm: 1 },
      }}
    >
      <img
        src={IntroPic}
        alt="intro"
        loading="eager|lazy"
        style={{
          opacity: 0.3,
          width: isSM ? '100%' : '120%',
          height: isSM ? '100%' : '120%',
          objectFit: 'cover',
          objectPosition: 'left bottom',
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          top: 180,
          alignSelf: 'flex-end',
          pl: 2,
          width: { sm: 270, lg: 300 },
          height: 'min-content',
          display: {
            xs: 'none',
            sm: 'block',
          },
        }}
      >
        <Logo />
      </Box>
      <Box
        sx={{
          width: { xs: '100%', sm: '75%', md: '55%' },
          backgroundColor: { xs: 'transparent', sm: '#ffffff21' },
          zIndex: 1,
          py: 3,
          px: 2,
          borderRadius: 1.7,
        }}
      >
        <Box
          position="relative"
          zIndex={1}
          height="min-content"
          alignSelf="flex-end"
          pb={{ xs: 1, sm: 2 }}
        >
          <Typography
            variant="h2"
            color="text.secondary"
            textAlign="center"
            fontWeight="500"
            fontSize={{ xs: '1.2rem', sm: '1.5rem' }}
            sx={{ pb: { xs: 1.2, sm: 2 } }}
          >
            ПРОГРАММА ЛОЯЛЬНОСТИ
          </Typography>
<<<<<<< HEAD

=======
>>>>>>> bf8cca8 (Initial commit to second branch)
          <Typography
            variant="h5"
            color="text.primary"
            textAlign="center"
            fontWeight="500"
            fontSize={{ xs: '1rem', sm: '1.3rem', md: '1.4rem' }}
            lineHeight={1}
          >
            Первыми узнавайте о новостях и интересных акциях!
          </Typography>
          <Typography
            variant="h5"
            color="text.primary"
            textAlign="center"
            fontWeight="500"
            fontSize={{ xs: '1rem', sm: '1.3rem', md: '1.4rem' }}
          >
            1 бонус - 1 рубль
          </Typography>
          <Typography
            variant="h5"
            color="text.primary"
            textAlign="center"
            fontWeight="500"
            fontSize={{ xs: '1rem', sm: '1.3rem', md: '1.4rem' }}
            lineHeight={1}
          >
            (оплата разово не более 50% от суммы чека)
          </Typography>
        </Box>
        <Box position="relative" zIndex={1} mx="auto" pt={4}>
          <Typography
            variant="h5"
            color="text.primary"
            fontWeight="500"
            fontSize={{ xs: '1rem', sm: '1.3rem', md: '1.4rem' }}
            sx={{ mb: { xs: 1.2, sm: 2.2 } }}
<<<<<<< HEAD
            whiteSpace="pre-wrap"
          >
            {loyalty?.text}
          </Typography>
          {/*<Typography
            variant="h5"
            color="text.primary"
            fontWeight="500"
            fontSize={{ xs: '1rem', sm: '1.3rem', md: '1.4rem' }}
            sx={{ mb: { xs: 1.2, sm: 2.2 } }}
          >
            Уровни участия в программе:
          </Typography>
           <Typography
=======
          >
            Уровни участия в программе:
          </Typography>
          <Typography
>>>>>>> bf8cca8 (Initial commit to second branch)
            variant="h5"
            color="text.primary"
            fontWeight="500"
            fontSize={{ xs: '1rem', sm: '1.3rem', md: '1.4rem' }}
            lineHeight={1}
            sx={{ mb: { xs: 1, sm: 2 } }}
          >
            «Гость MADE IN GEORGIA» <br />
            При каждой оплате на карту возвращается —{' '}
            <Typography component="span" color="text.error">
              {' '}
              5%
            </Typography>
          </Typography>
          <Typography
            variant="h5"
            color="text.primary"
            fontWeight="500"
            fontSize={{ xs: '1rem', sm: '1.3rem', md: '1.4rem' }}
            lineHeight={1}
            sx={{ mb: { xs: 1, sm: 2 } }}
          >
            «Постоянный гость MADE IN GEORGIA»
            <br />
            Если общая сумма превышает 100 000 руб. —{' '}
            <Typography component="span" color="text.error">
              10%
            </Typography>
          </Typography>
          <Typography
            variant="h5"
            color="text.primary"
            fontWeight="500"
            fontSize={{ xs: '1rem', sm: '1.3rem', md: '1.4rem' }}
            lineHeight={1}
            sx={{ mb: { xs: 1, sm: 2 } }}
          >
            «Друг MADE IN GEORGIA»
            <br />
            Если общая сумма превышает 250 000 руб. —{' '}
            <Typography component="span" color="text.error">
              15%
            </Typography>
<<<<<<< HEAD
          </Typography> */}
=======
          </Typography>
>>>>>>> bf8cca8 (Initial commit to second branch)
        </Box>
      </Box>
      <Box width="100%" display="flex" justifyContent="center" pt={{ xs: 0, sm: 4 }}>
        <Button
          variant="contained"
          component="a"
          href="https://cabinet.statix-pro.ru/forms/made_in_georgia"
          target="_blank"
          color="error"
          sx={{
            width: 'fit-content',
            fontSize: { xs: '1rem', sm: '2rem' },
            textTransform: 'none',
            py: { xs: 0.5, sm: 0.75 },
          }}
          size="large"
        >
          Стать участником программы
        </Button>
      </Box>
    </Box>
  );
};

export default Loyalty;
