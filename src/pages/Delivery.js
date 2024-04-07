import React from 'react';
import { Link } from 'react-router-dom';

import GooglePlay from 'assets/images/icons/googlePlay.png';
import Phone from 'assets/images/icons/smartphone.svg';
import Map from 'assets/images/map.png';

import { Box, Typography, Grid } from '@mui/material';

const Delivery = () => {
  return (
    <Box id="delivery" width={{ xs: '100%', sm: '85%' }} mx="auto">
      <Typography variant="h1" textAlign="center" fontSize={{ xs: '2.5rem', sm: '4rem' }}>
        Доставка
      </Typography>
      <Grid container sx={{ mt: 6 }}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ width: { xs: '85%', sm: '100%' }, m: '0 auto' }}>
            <Typography variant="h4" textAlign={{ xs: 'left', sm: 'center' }} fontWeight="400">
              СПОСОБЫ ЗАКАЗА
            </Typography>
            <Box display="flex" alignItems="center" gap={5} py={3}>
              <img
                src={Phone}
                alt="delivery"
                style={{ width: 17, height: 'min-content', alignSelf: 'start' }}
              />
              <Box display="flex" flexDirection="column" textAlign="left">
                <Typography variant="h5" sx={{ pb: 2 }} color="text.primary">
                  У НАС В ПРИЛОЖЕНИИ
                </Typography>
                <Typography
                  variant="body1"
                  component={Link}
                  to="https://web.telegram.org/a/#467196529"
                  color="text.info"
                  fontWeight="400"
                  sx={{ pt: 0.5, textDecoration: 'none' }}
                  target="_blank"
                >
                  https://web.telegram.org/a/#467196529
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap={5} py={3}>
              <img
                src={Phone}
                alt="delivery"
                style={{ width: 17, height: 'min-content', alignSelf: 'start' }}
              />
              <Box display="flex" flexDirection="column" textAlign="left">
                <Typography variant="h5" sx={{ pb: 2 }} color="text.primary">
                  САМОВЫВОЗ
                </Typography>{' '}
                <Typography variant="body1" fontWeight="400" textDecoration="none" target="_blank">
                  Позвоните по номеру{' '}
                  <Typography
                    component={Link}
                    to="tel:+7 (495) 663-68-68"
                    sx={{ textDecoration: 'none' }}
                    color="text.success"
                  >
                    8 (495) 663-68-68
                  </Typography>
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="h4"
              color=""
              textAlign={{ xs: 'left', sm: 'center' }}
              fontWeight="400"
              sx={{ pt: 3 }}
            >
              СПОСОБЫ ЗАКАЗА
            </Typography>
            <Box display="flex" alignItems="center" gap={5} py={3}>
              <img
                src={Phone}
                alt="delivery"
                style={{ width: 17, height: 'min-content', alignSelf: 'start' }}
              />
              <Box display="flex" flexDirection="column" textAlign="left">
                <Typography variant="h5" sx={{ pb: 2 }} color="text.primary">
                  ДОСТАВКА
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight="400"
                  textTransform="capitalize"
                  color="text.error"
                  sx={{ pt: 0.5 }}
                >
                  москва сити - бесплатно
                </Typography>
                <Typography variant="body1" fontWeight="400" sx={{ pt: 0.5 }}>
                  Время приема заказов с 11:00-22:00
                </Typography>
                <Typography
                  variant="h5"
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
            <Box display="flex" alignItems="center" gap={5} pt={{ xs: 2, sm: 5 }}>
              <img
                src={Phone}
                alt="delivery"
                style={{ width: 17, height: 'min-content', alignSelf: 'start' }}
              />
              <Box display="flex" flexDirection="column" textAlign="left">
                <Typography variant="h5" sx={{ pb: 2 }} color="text.primary">
                  ПО ТЕЛЕФОНУ
                </Typography>

                <Typography
                  variant="h5"
                  sx={{ pb: 2, pt: 0.5, width: '70%' }}
                  fontWeight="400"
                  lineHeight={1.1}
                >
                  Ваш заказ будет готов к выдаче в ресторане
                </Typography>
                <Typography variant="body1" fontWeight="400" sx={{ pt: 0.5 }}>
                  График работы: с 11:00 до 22:00
                </Typography>
                <Typography variant="body1" fontWeight="400" sx={{ pt: 0.5 }}>
                  Адрес: 1-й красногвардейский пр.,д.19, 2 этаж
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography
            variant="h4"
            color=""
            textAlign="center"
            fontWeight="400"
            sx={{ pb: { xs: 5, sm: 2 }, pt: { xs: 7, sm: 0 } }}
          >
            ЗОНА БЕСПЛАТНОЙ ДОСТАВКИ
          </Typography>
          <Box
            maxHeight="630px"
            sx={{
              overflow: 'hidden',
              width: { xs: '100%', sm: '90%' },
              mx: 'auto',
              textAlign: 'center',
            }}
          >
            <img src={Map} alt="map" style={{ width: '100%', objectFit: 'contain' }} />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={{ xs: 1, sm: 5 }}
            py={3}
            justifyContent="center"
            flexDirection={{ xs: 'column', sm: 'row' }}
          >
            <Typography
              to="https://apps.apple.com/us/app/whatsapp-messenger/id310633997?itsct=apps_box_badge&amp;itscg=30200"
              target="_blank"
              rel="noreferrer"
              component={Link}
              sx={{
                display: 'inline-block',
                overflow: 'hidden',
                width: { xs: '150px', sm: '250px' },
              }}
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1241395200"
                alt="Download on the App Store"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Typography>
            <Typography
              component={Link}
              rel="noreferrer"
              to="https://play.google.com/store/apps/details?id=com.whatsapp"
              target="_blank"
              sx={{
                display: 'inline-block',
                overflow: 'hidden',
                width: { xs: '150px', sm: '250px' },
              }}
            >
              <img
                src={GooglePlay}
                alt="Get it on Google Play"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Delivery;
