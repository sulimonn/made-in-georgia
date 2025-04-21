import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, useMediaQuery, Modal } from '@mui/material';
import { Turn as Hamburger } from 'hamburger-react';

// project import
import Drawer from './Drawer';
import Header from './Header';

// types
import { activeItem, openDrawer } from 'store/reducers/nav';
import Footer from './Footer';
import Loader from 'components/Loader';
import Register from 'pages/Register';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const matchDownLG = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const { drawerOpen, openItem } = useSelector((state) => state.nav);

  const iconBackColor = theme.palette.error.main;
  const iconBackColorOpen = theme.palette.grey[100];

  const [openModal, setOpenModal] = useState(openItem === 'feedback');
  const [open, setOpen] = useState(drawerOpen);

  const { pathname } = useLocation();

<<<<<<< HEAD

=======
>>>>>>> bf8cca8 (Initial commit to second branch)
  useEffect(() => {
    if (pathname === '/feedback') {
      dispatch(activeItem({ openItem: 'feedback' }));
    }
<<<<<<< HEAD
  }, [pathname, dispatch, navigate]);
=======
  }, [pathname, dispatch]);
>>>>>>> bf8cca8 (Initial commit to second branch)
  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };

  useEffect(() => {
    setOpen(drawerOpen);
  }, [drawerOpen]);

  useEffect(() => {
    setOpenModal(openItem === 'feedback' || pathname === '/feedback');
  }, [openItem, pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    dispatch(activeItem({ openItem: 'home' }));
    setOpenModal(false);
    if (openModal) navigate('/');
  };
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
    <>
      <Box sx={{ display: 'block', width: '100%', position: 'relative' }}>
        <Box
          sx={{
            display: {
              xs: 'flex',
              lg: 'none',
            },
            width: 'min-content',
            position: open ? 'fixed' : 'fixed',
            zIndex: 1209,
            right: '2em',
            top: '1.3em',
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
        <Box component="main" sx={{ width: '100%', flexGrow: 1, flex: 1 }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        disableScrollLock
      >
        <Box>
          <Register handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default MainLayout;
