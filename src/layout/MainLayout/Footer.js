import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import Logo from 'components/Logo/Logo';
import { useTheme } from '@mui/material/styles';
import { WhatsAppOutlined, InstagramOutlined } from '@ant-design/icons';

const FooterContent = (matchDownMD) => {
  return (
    <>
      <Typography variant={matchDownMD ? 'h6' : 'h5'} sx={{ mb: 1.5 }}>
        ТЕЛЕФОН:{' '}
        <a href="tel:+7 (495) 663-68-68" style={{ textDecoration: 'none', color: 'inherit' }}>
          8 (495) 663-68-68
        </a>
      </Typography>
      <Typography variant={matchDownMD ? 'h6' : 'h5'} sx={{ mb: 1.5 }}>
        ПОЧТА:{' '}
        <a
          href="mailto:Made.in.georgia.rest.com"
          style={{ textDecoration: 'none', color: 'inherit', textTransform: 'lowercase' }}
        >
          Made.in.georgia.rest.com
        </a>
      </Typography>
      <Box display="flex" gap={2}>
        <Typography component={Link} to="/" color="text.error" variant="h3">
          <InstagramOutlined />
        </Typography>
        <Typography component={Link} to="/" color="text.error" variant="h3">
          <WhatsAppOutlined />
        </Typography>
      </Box>
    </>
  );
};

const Footer = () => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <footer>
      <Box
        id="contacts"
        sx={{
          py: { xs: 4, md: 8 },
          borderTop: '1px solid',
          borderColor: 'text.error',
        }}
      >
        <Grid
          container
          sx={{
            width: { xs: '90%', sm: '85%' },
            margin: { xs: '0 auto' },
            pb: { xs: 4, md: 3 },
          }}
        >
          <Grid item xs={12} md={3}>
            <Typography variant={matchDownMD ? 'h6' : 'h5'} sx={{ mb: 1.5 }}>
              АДРЕС: 1-й красногвардейский пр.,д.19, 2 этаж
            </Typography>
            <Typography variant={matchDownMD ? 'h6' : 'h5'} sx={{ mb: 1.5 }}>
              ГРАФИК РАБОТЫ: С 11:00 - 22:00
            </Typography>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>{FooterContent(matchDownMD)}</Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width={{ xs: '120px', md: '162px' }} mx="auto">
              <Logo />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
            {FooterContent(matchDownMD)}
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
