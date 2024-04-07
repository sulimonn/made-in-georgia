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

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
  const dispatch = useDispatch();

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

  return (
    <Box sx={{ display: 'block', width: '100%', position: 'relative' }}>
      <Box
        sx={{
          display: {
            xs: 'flex',
            lg: 'none',
          },
          width: 'min-content',
          position: open ? 'fixed' : 'absolute',
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
        />
      </Box>
      {matchDownLG && <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />}
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box component="main" sx={{ width: '100%', flexGrow: 1, flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
