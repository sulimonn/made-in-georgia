// material-ui
import { Box, useMediaQuery, Typography } from '@mui/material';

// project import
import { Link } from 'react-scroll';
import menuItems from 'menu-items/index';
import { useSelector } from 'react-redux';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const navs = menuItems.items;
  const openItem = useSelector((state) => state.nav.openItem);

  return (
    <Box
      sx={{ width: '100%' }}
      display="flex"
      justifyContent="space-between"
      alignItems="baseline"
      gap={14}
      py={3}
    >
      <Typography
        component={Link}
        to="/"
        color="error"
        variant={matchesMd ? 'h3' : 'h2'}
        textTransform="uppercase"
        minWidth={330}
        fontWeight="400"
      >
        made{'  '}in{'  '}georgia
      </Typography>
      {!matchesMd && (
        <Box display="flex" flex={1} alignItems="center" justifyContent="space-between">
          {navs.map((group) =>
            group.children.map((item) => {
              return (
                <Typography
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to={item.url.replace('#', '')}
                  key={item.id}
                  variant="h3"
                  component={Link}
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
      )}{' '}
    </Box>
  );
};

export default HeaderContent;
