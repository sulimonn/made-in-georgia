import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import GooglePlay from 'assets/images/icons/googlePlay.png';
import AppleStore from 'assets/images/icons/applestore.png';
import Phone from 'assets/images/icons/smartphone.svg';
import selfcall from 'assets/images/icons/selfcall.svg';
import Contact from 'assets/images/icons/contact.svg';
import DeliveryPic from 'assets/images/icons/delivery.svg';

import { Box, Typography, Grid } from '@mui/material';

const stores = (
  <>
    <Typography
      to="https://apps.apple.com/ru/app/made-in-georgia-%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD/id6479214865"
      target="_blank"
      rel="noreferrer"
      component={Link}
      sx={{
        display: 'inline-block',
        overflow: 'hidden',
        height: { xs: 'auto', sm: '60px' },
        width: { xs: '150px', sm: 'fit-content' },
      }}
    >
      <img
        src={AppleStore}
        alt="Download on the App Store"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
        }}
      />
    </Typography>
    <Typography
      component={Link}
      rel="noreferrer"
      to="https://play.google.com/store/apps/details?id=com.madeingeorgia"
      target="_blank"
      sx={{
        display: 'inline-block',
        overflow: 'hidden',
        height: { xs: 'auto', sm: '60px' },
        width: { xs: '150px', sm: 'fit-content' },
      }}
    >
      <img
        src={GooglePlay}
        alt="Get it on Google Play"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
        }}
      />
    </Typography>
  </>
);

const Delivery = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src =
      'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A45c51f39158fd212da4e6fa3c5db59bc82d6504f87f92236d2ad702253309e02&width=100%25&height=100%&lang=ru_RU&scroll=true&theme=dark';

    const map = document.getElementById('map');
    if (map && !map.hasChildNodes()) {
      map.appendChild(script);
    }
  }, []);
  return (
    <Box id="delivery" width={{ xs: '100%', sm: '85%' }} mx="auto" mb={{ xs: 10, sm: 15 }}>
      <Typography variant="h1" textAlign="center" fontSize={{ xs: '2.5rem', sm: '4rem' }}>
        Доставка
      </Typography>
      <Grid container sx={{ mt: 6 }}>
        <Grid item xs={12} sm={5}>
          <Box sx={{ width: { xs: '85%', sm: '100%' }, m: '0 auto' }}>
            <Typography variant="h3" textAlign={{ xs: 'left', sm: 'center' }} fontWeight="500">
              СПОСОБЫ ЗАКАЗА
            </Typography>
            <Box display="flex" alignItems="center" gap={{ xs: 3.5, sm: 5 }} py={3}>
              <img
                src={Phone}
                alt="delivery"
                loading="lazy"
                style={{ width: 17, height: 'min-content', alignSelf: 'start', marginTop: '5px' }}
              />
              <Box display="flex" flexDirection="column" textAlign="left">
                <Typography variant="h4" sx={{ pb: 2 }} color="text.primary">
                  У НАС В ПРИЛОЖЕНИИ
                </Typography>

                <Box
                  display="flex"
                  alignItems="center"
                  gap={{ xs: 1 }}
                  justifyContent="center"
                  flexDirection={'column'}
                >
                  {stores}
                </Box>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap={{ xs: 3.5, sm: 5 }} py={3}>
              <img
                src={Contact}
                alt="delivery"
                loading="lazy"
                style={{ width: 23, height: 'min-content', alignSelf: 'start', marginTop: '5px' }}
              />
              <Box display="flex" flexDirection="column" textAlign="left">
                <Typography variant="h4" sx={{ pb: 2 }} color="text.primary">
                  ПО ТЕЛЕФОНУ
                </Typography>{' '}
                <Typography variant="h5" fontWeight="400" textDecoration="none" target="_blank">
                  Позвоните по номеру{' '}
                  <Typography
                    component={Link}
                    to="tel:+7 (495) 663-68-68"
                    sx={{ textDecoration: 'none', display: { xs: 'block', sm: 'inline' } }}
                    color="text.success"
                  >
                    8 (495) 663-68-68
                  </Typography>
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap={{ xs: 3.5, sm: 5 }} py={3}>
              <img
                src={DeliveryPic}
                alt="delivery"
                style={{ width: 23, height: 'min-content', alignSelf: 'start', marginTop: '5px' }}
              />
              <Box display="flex" flexDirection="column" textAlign="left">
                <Typography variant="h4" sx={{ pb: 2 }} color="text.primary">
                  ДОСТАВКА
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="400"
                  textTransform="capitalize"
                  color="text.error"
                  fontSize={{ xs: '1.2em', sm: '1.2em' }}
                  sx={{ pt: 0.5 }}
                >
                  москва сити - бесплатно
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="400"
                  sx={{ pt: 0.5 }}
                  fontSize={{ xs: '1.2em', sm: '1.2em' }}
                >
                  Время приема заказов с 11:00-22:00
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ pb: { xs: 0, sm: 2 }, pt: 0.5, width: '60%' }}
                  fontWeight="400"
                  color="text.disabled"
                  lineHeight={1.1}
                >
                  Уважаемые гости!
                  <br /> Для заказа с нашего ресторана, просим воспользоваться нашим мобильным
                  приложением .
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap={{ xs: 3.5, sm: 5 }} pt={{ xs: 2 }}>
              <img
                src={selfcall}
                alt="selfcall"
                style={{ width: 23, height: 'min-content', alignSelf: 'start', marginTop: '3px' }}
              />
              <Box display="flex" flexDirection="column" textAlign="left">
                <Typography variant="h4" sx={{ pb: 2 }} color="text.primary">
                  САМОВЫВОЗ
                </Typography>

                <Typography
                  variant="h4"
                  sx={{ pb: 2, pt: 0.5, width: '70%' }}
                  fontWeight="400"
                  lineHeight={1.1}
                >
                  Ваш заказ будет готов к выдаче в ресторане
                </Typography>
                <Typography variant="h5" fontWeight="400" sx={{ pt: 0.5 }}>
                  График работы: с 11:00 до 22:00
                </Typography>
                <Typography variant="h5" fontWeight="400" sx={{ pt: 0.5 }}>
                  Адрес: 1-й красногвардейский пр.,д.19, 2 этаж
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography
            variant="h3"
            color=""
            textAlign="center"
            fontWeight="500"
            fontSize={{ xs: '1.25rem', sm: '1.7rem' }}
            sx={{ pb: { xs: 4, sm: 4 }, pt: { xs: 7, sm: 0 } }}
          >
            ЗОНА БЕСПЛАТНОЙ ДОСТАВКИ
          </Typography>
          <Box
            sx={{
              overflow: 'hidden',
              width: { xs: '100%', sm: '100%' },
              height: { xs: '350px', sm: '670px' },
              textAlign: 'center',
            }}
            id="map"
          ></Box>
          <Box
            display="flex"
            alignItems="center"
            gap={{ xs: 1, sm: 3 }}
            py={3}
            justifyContent="center"
            flexDirection={{ xs: 'column', sm: 'row' }}
          >
            {stores}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Delivery;
