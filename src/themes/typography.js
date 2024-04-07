// ==============================|| DEFAULT THEME - TYPOGRAPHY  ||============================== //

const Typography = (fontFamily) => ({
  htmlFontSize: 16,
  fontFamily,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 600,
    fontSize: '3rem',
    lineHeight: 1.21,
    letterSpacing: '-0.0462em',
  },
  h2: {
    fontWeight: 600,
    fontSize: '2.4rem',
    lineHeight: 1.27,
    letterSpacing: '-.0462em',
  },
  h3: {
    fontWeight: 600,
    fontSize: '1.9rem',
    lineHeight: 1.33,
    letterSpacing: '-.0462em',
  },
  h4: {
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: 1.4,
    letterSpacing: '-.0462em',
  },
  h5: {
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: '-.0462em',
  },
  h6: {
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.57,
    letterSpacing: '-.0462em',
  },
  caption: {
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.66,
    letterSpacing: '-.0462em',
  },
  body1: {
    fontSize: '0.875rem',
    lineHeight: 1.57,
  },
  body2: {
    fontSize: '0.75rem',
    lineHeight: 1.66,
  },
  subtitle1: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: 1.57,
  },
  subtitle2: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.66,
  },
  overline: {
    lineHeight: 1.66,
  },
  button: {
    textTransform: 'capitalize',
  },
});

export default Typography;
