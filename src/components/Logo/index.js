import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase, Box } from '@mui/material';
import { useDispatch } from 'react-redux';

// project import
import Logo from './Logo';
import { openDrawer } from 'store/reducers/nav';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => {
  const dispatch = useDispatch();
  return (
    <ButtonBase
      disableRipple
      component={Link}
      to={'/'}
      onClick={() => dispatch(openDrawer({ drawerOpen: false }))}
      sx={sx}
    >
      <Box sx={{ width: '50%', marginRight: 'auto' }}>
        <Logo />
      </Box>
    </ButtonBase>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string,
};

export default LogoSection;
