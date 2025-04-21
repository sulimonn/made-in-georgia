// material-ui
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

// loader style
const LoaderWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
<<<<<<< HEAD
  right: 0,
  bottom: 0,
  backgroundColor: '#000000',
=======
>>>>>>> bf8cca8 (Initial commit to second branch)
  zIndex: 2001,
  width: '100%',
  '& > * + *': {
    marginTop: theme.spacing(2),
  },
}));

// ==============================|| Loader ||============================== //

const Loader = () => (
  <LoaderWrapper>
    <LinearProgress color="error" />
  </LoaderWrapper>
);

export default Loader;
