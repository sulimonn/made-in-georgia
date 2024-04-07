import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// project import
import Logo from './Logo';
import config from 'config';
import { activeItem } from 'store/reducers/nav';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => {
  const { defaultId } = useSelector((state) => state.nav);
  const dispatch = useDispatch();
  return (
    <ButtonBase
      disableRipple
      component={Link}
      onClick={() => dispatch(activeItem({ openItem: [defaultId] }))}
      to={!to ? config.defaultPath : to}
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
