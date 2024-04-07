import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// material-ui
import { List, Typography } from '@mui/material';

// project import
import NavItem from './NavItem';

// ==============================|| NAVIGATION - LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
  const menu = useSelector((state) => state.nav);
  const { drawerOpen } = menu;

  const navCollapse = item.children?.map((menuItem) => {
    switch (menuItem.type) {
      case 'item':
        return <NavItem key={menuItem.id} item={menuItem} level={1} />;
      default:
        return (
          <Typography key={menuItem.id} variant="h6" color="error" align="center">
            Fix - Group Collapse or Items
          </Typography>
        );
    }
  });

  return <List sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, pl: 1 }}>{navCollapse}</List>;
};

NavGroup.propTypes = {
  item: PropTypes.object,
};

export default NavGroup;
