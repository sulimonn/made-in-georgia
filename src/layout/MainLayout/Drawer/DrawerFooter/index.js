import React from 'react';

import { Box, Button, Typography } from '@mui/material';
import { WhatsAppOutlined, InstagramOutlined } from '@ant-design/icons';

const DrawerFooter = () => {
  return (
    <Box pb={7} px={4} display="flex" flexDirection="column" justifyContent="left" gap={2}>
      <Box display="flex" gap={2} flexDirection="column" width="fit-content">
        <Button
          variant="contained"
          component="a"
          href="tel:+74956636868"
          target="_blank"
          color="error"
          sx={{ borderRadius: 3, width: 'fit-content' }}
          size="large"
        >
          8 (495) 663-68-68
        </Button>
        <Button
          variant="contained"
          component="a"
          href="https://wa.me/+79161366868"
          target="_blank"
          color="error"
          sx={{ borderRadius: 3 }}
          size="large"
        >
          Заказать стол
        </Button>
      </Box>
      <Box display="flex" gap={2}>
        <Typography
          component="a"
          target="_blank"
          href="https://www.instagram.com/made.in.georgia.rest/"
          color="text.error"
          variant="h3"
        >
          <InstagramOutlined />
        </Typography>
        <Typography
          component="a"
          target="_blank"
          href="https://wa.me/+79161366868"
          color="text.error"
          variant="h3"
        >
          <WhatsAppOutlined />
        </Typography>
      </Box>
      <Typography variant={'h6'}>АДРЕС: 1-й красногвардейский пр.,д.19, 2 этаж</Typography>
      <Typography variant={'h6'}>ГРАФИК РАБОТЫ: С 11:00 - 22:00</Typography>
    </Box>
  );
};

export default DrawerFooter;
