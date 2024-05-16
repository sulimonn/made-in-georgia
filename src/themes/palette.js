// material-ui
import { createTheme } from '@mui/material/styles';

// third-party
import { presetPalettes } from '@ant-design/colors';

// project import
import ThemeOption from './theme';

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (mode) => {
  const colors = presetPalettes;

  const greyPrimary = [
    '#ffffff',
    '#fafafa',
    '#f5f5f5',
    '#f0f0f0',
    '#d9d9d9',
    '#bfbfbf',
    '#8c8c8c',
    '#595959',
    '#262626',
    '#141414',
    '#000000',
  ];
  const greyAscent = ['#fafafa', '#bfbfbf', '#434343', '#1f1f1f'];
  const greyConstant = ['#fafafb', '#e6ebf1'];

  colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant];

  const paletteColor = ThemeOption(colors);
  paletteColor.error = {
    ...paletteColor.error,
    main: '#ec0100',
  };

  return createTheme({
    palette: {
      mode,
      common: {
        black: '#000',
        white: '#fff',
      },
      ...paletteColor,
      primary: {
        main: '#ec0100',
      },
      text: {
        primary: paletteColor.grey[0],
        secondary: paletteColor.grey[400],
        info: '#198EB6',
        error: '#ec0100',
        success: '#78BE4E',
        disabled: '#585858',
      },
      action: {
        disabled: paletteColor.grey[700],
      },
      divider: paletteColor.grey[200],
      background: {
        paper: paletteColor.grey[900],
        default: paletteColor.grey[900],
      },
    },
  });
};

export default Palette;
