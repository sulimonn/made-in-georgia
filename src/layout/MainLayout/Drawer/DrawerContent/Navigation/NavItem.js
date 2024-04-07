import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ListItemText, Typography } from '@mui/material';

// project import
import { openDrawer } from 'store/reducers/nav';

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

const NavItem = ({ item, level }) => {
  const dispatch = useDispatch();

  const { drawerOpen, openItem } = useSelector((state) => state.nav);

  const itemHandler = (id) => {
    dispatch(openDrawer({ drawerOpen: false }));
  };

  const isSelected = openItem.findIndex((id) => id === item.id) > -1;

  const textColor = 'text.primary';
  const iconSelectedColor = 'text.primary';
  return (
    <Link
      onClick={() => itemHandler(item.id)}
      to={item.url.replace('#', '')}
      smooth
      spy
      duration={500}
      activeClass="active"
    >
      {(drawerOpen || (!drawerOpen && level !== 1)) && (
        <ListItemText
          sx={{
            zIndex: 1201,
            pl: drawerOpen ? `${level * 28}px` : 1.5,
            py: { xs: 1, sm: 1.5 },
          }}
          primary={
            <Typography variant="h4" sx={{ color: isSelected ? iconSelectedColor : textColor }}>
              {item.title}
            </Typography>
          }
        />
      )}
    </Link>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
};

export default NavItem;
