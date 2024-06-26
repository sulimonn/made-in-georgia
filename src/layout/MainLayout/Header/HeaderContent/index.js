// material-ui
import { Box, useMediaQuery, Typography, Button } from '@mui/material';

// project import
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import menuItems from 'menu-items/index';
import { useSelector, useDispatch } from 'react-redux';
import { activeItem } from 'store/reducers/nav';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const dispatch = useDispatch();
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const navs = menuItems.items;
  const { openItem } = useSelector((state) => state.nav);
  const linkProps = { activeClass: 'active', spy: true, smooth: true, duration: 500, offset: -110 };

  const setOpenItem = (id) => {
    if (openItem !== id) {
      dispatch(activeItem({ openItem: id }));
    }
  };

  return (
    <Box
      sx={{ width: { xs: '100%', md: '100%' }, mx: 'auto' }}
      display="flex"
      maxWidth="1200px"
      justifyContent="space-between"
      alignItems="baseline"
      gap={{ md: 5, lg: 10 }}
      py={{ xs: 1.5, sm: 3 }}
      minHeight={{ xs: '60px', lg: 'auto' }}
    >
      {!matchesMd && (
        <Box display="flex" flex={1} alignItems="center" justifyContent="space-between">
          {navs.map((group) =>
            group.children.map((item) => {
              return (
                <Typography
                  {...(item?.target || linkProps)}
                  to={item?.target ? item.url : item.url.replace('#', '')}
                  key={item.id}
                  onClick={() => setOpenItem(item.id)}
                  variant="h3"
                  fontSize={{ md: '1.7em', lg: '1.9em' }}
                  target={item?.target}
                  whiteSpace="nowrap"
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
        color="error"
        href="https://wa.me/+79161366868"
        sx={{
          display: { xs: 'none', md: 'block' },

          px: 2,
          py: 1,
        }}
      >
        <Typography
          variant={'h3'}
          fontWeight="400"
          textTransform="none"
          color="text.primary"
          fontSize={{ md: '1.7em', lg: '1.9em' }}
          whiteSpace="nowrap"
        >
          Заказать стол
        </Typography>
      </Button>
    </Box>
  );
};

export default HeaderContent;
