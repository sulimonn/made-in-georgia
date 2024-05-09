import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
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
  const linkProps = {
    activeClass: 'active',
    spy: true,
    smooth: true,
    duration: 500,
    offset: item.id === 'contacts' ? -610 : -90,
  };
  return (
    (drawerOpen || (!drawerOpen && level !== 1)) && (
      <ListItemText
        sx={{
          zIndex: 1201,
          pl: drawerOpen ? `${level * 28}px` : 1.5,
          py: { xs: 1, sm: 1.5 },
        }}
        primary={
          <Typography
            component={item?.target ? LinkRouter : Link}
            target={item?.target}
            onClick={() => itemHandler(item.id)}
            to={item.target ? item.url : item.url.replace('#', '')}
            {...(item?.target ? null : linkProps)}
            variant="h4"
            sx={{ color: isSelected ? iconSelectedColor : textColor, textDecoration: 'none' }}
          >
            {item.title}
          </Typography>
        }
      />
    )
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
};

export default NavItem;
