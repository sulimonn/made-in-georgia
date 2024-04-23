// material-ui
import { Box, useMediaQuery, Typography, Button } from '@mui/material';

// project import
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import menuItems from 'menu-items/index';
import { useSelector } from 'react-redux';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const navs = menuItems.items;
  const openItem = useSelector((state) => state.nav.openItem);
  const linkProps = { activeClass: 'active', spy: true, smooth: true, duration: 500 };

  return (
    <Box
      sx={{ width: '100%' }}
      display="flex"
      justifyContent="space-between"
      alignItems="baseline"
      gap={{ md: 8, lg: 22 }}
      py={{ xs: 1.5, sm: 3 }}
      minHeight={{ xs: '84px', lg: 'auto' }}
    >
      {!matchesMd && (
        <Box display="flex" flex={1} alignItems="center" gap={{ md: 5, lg: 8 }}>
          {navs.map((group) =>
            group.children.map((item) => {
              return (
                <Typography
                  {...(item?.target ? null : linkProps)}
                  to={item?.target ? item.url : item.url.replace('#', '')}
                  key={item.id}
                  variant="h3"
                  target={item?.target}
                  component={item?.target ? LinkRouter : Link}
                  fontWeight="400"
                  color={openItem.includes(item.id) ? 'text.primary' : 'text.secondary'}
                  sx={{
                    textDecoration: 'none',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-3px',
                      left: 0,
                      right: openItem.includes(item.id) ? 0 : '100%',
                      borderBottom: '2px solid',
                      borderColor: 'text.primary',
                      transition: '0.3s',
                    },
                    '&:hover': {
                      color: 'text.primary',
                    },
                    '&:hover::after': {
                      right: 0,
                    },
                  }}
                >
                  {item.title}
                </Typography>
              );
            }),
          )}
        </Box>
      )}

      <Button
        variant="contained"
        size="large"
        target="_blank"
        component="a"
        href="https://wa.me/+79161366868"
        sx={{
          display: { xs: 'none', md: 'block' },
          borderRadius: 3,
          backgroundColor: 'transparent !important',
          p: 0,
        }}
      >
        <Typography variant={'h3'} fontWeight="400" textTransform="none" color="text.error">
          Заказать стол
        </Typography>
      </Button>
    </Box>
  );
};

export default HeaderContent;
