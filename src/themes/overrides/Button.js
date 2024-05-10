// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme) {
  const disabledStyle = {
    '&.Mui-disabled': {
      backgroundColor: theme.palette?.error.main,
      borderRadius: 3,
    },
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 400,
          borderRadius: 7,
        },
        contained: {
          borderRadius: 7,
          ...disabledStyle,
        },
        outlined: {
          borderRadius: 7,
          ...disabledStyle,
        },
      },
    },
  };
}
