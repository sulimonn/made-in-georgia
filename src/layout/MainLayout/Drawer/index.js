import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { Box, Drawer } from '@mui/material';

// project import
import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';
import DrawerFooter from './DrawerFooter';

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

const MainDrawer = ({ open, handleDrawerToggle, window }) => {
  // responsive drawer container
  const container = window !== undefined ? () => window().document.body : undefined;

  // header content
  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerFooter = useMemo(() => <DrawerFooter />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);

  return (
    <Box component="nav" sx={{ flexShrink: { lg: 0 }, zIndex: 1300 }} aria-label="mailbox folders">
      <Drawer
        container={container}
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          height: '100%',
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100%',
            backgroundImage: 'none',
            boxShadow: 'inherit',
          },
          '&.MuiPaper-elevation': {
            display: { xs: 'block !important', lg: 'none' },
          },
        }}
      >
        {open && drawerHeader}
        {open && drawerContent}
        {open && drawerFooter}
      </Drawer>
    </Box>
  );
};

MainDrawer.propTypes = {
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  window: PropTypes.object,
};

export default MainDrawer;
