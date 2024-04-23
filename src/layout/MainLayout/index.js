import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import { Turn as Hamburger } from 'hamburger-react';

// project import
import Drawer from './Drawer';
import Header from './Header';

// types
import { openDrawer } from 'store/reducers/nav';
import Footer from './Footer';
import Loader from 'components/Loader';
import Intro from 'pages/Intro';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const { drawerOpen } = useSelector((state) => state.nav);

  const iconBackColor = theme.palette.error.main;
  const iconBackColorOpen = theme.palette.grey[100];

  // drawer toggler
  const [open, setOpen] = useState(drawerOpen);
  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };

  useEffect(() => {
    setOpen(drawerOpen);
  }, [drawerOpen]);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timer when the component unmounts or when loading is done
    return () => clearTimeout(timer);
  }, []);
  if (loading)
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        sx={{ fontStretch: 'condensed !important' }}
      >
        <Loader />
      </Box>
    );

  return (
    <Box sx={{ display: 'block', width: '100%', position: 'relative' }}>
      <Box
        sx={{
          display: {
            xs: 'flex',
            lg: 'none',
          },
          width: 'min-content',
          position: open ? 'fixed' : 'fixed',
          zIndex: 1201,
          right: '2em',
          top: '2em',
        }}
      >
        <Hamburger
          toggled={open}
          toggle={handleDrawerToggle}
          color={open ? iconBackColorOpen : iconBackColor}
          hideOutline={false}
          rounded
          style={{ zIndex: 1201, position: 'fixed' }}
        />
      </Box>
      {matchDownLG && <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />}
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box height="calc(100vh - 80px)" mt="90px" display="flex" flexDirection="column">
        <Intro />
      </Box>
      <Box component="main" sx={{ width: '100%', flexGrow: 1, flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
