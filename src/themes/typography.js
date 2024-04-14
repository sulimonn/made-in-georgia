// ==============================|| DEFAULT THEME - TYPOGRAPHY  ||============================== //

const Typography = (fontFamily) => ({
  htmlFontSize: 16,
  fontFamily,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 500,
    fontSize: '3em',
    lineHeight: 1.21,
    letterSpacing: '-0.02em',
    fontStretch: 'condensed',
  },
  h2: {
    fontWeight: 500,
    fontSize: '2.4em',
    lineHeight: 1.27,
    letterSpacing: '-.02em',
    fontStretch: 'condensed',
  },
  h3: {
    fontWeight: 500,
    fontSize: '1.9em',
    lineHeight: 1.33,
    letterSpacing: '-.02em',
    fontStretch: 'condensed',
  },
  h4: {
    fontWeight: 500,
    fontSize: '1.25em',
    lineHeight: 1.4,
    letterSpacing: '-.02em',
    fontStretch: 'condensed',
  },
  h5: {
    fontWeight: 500,
    fontSize: '1em',
    lineHeight: 1.5,
    letterSpacing: '-.02em',
    fontStretch: 'condensed',
  },
  h6: {
    fontWeight: 400,
    fontSize: '0.875em',
    lineHeight: 1.57,
    letterSpacing: '-.02em',
    fontStretch: 'condensed',
  },
  caption: {
    fontWeight: 400,
    fontSize: '0.75em',
    lineHeight: 1.66,
    letterSpacing: '-.02em',
    fontStretch: 'condensed',
  },
  body1: {
    fontSize: '0.875em',
    lineHeight: 1.57,
    fontStretch: 'condensed',
  },
  body2: {
    fontSize: '0.75em',
    lineHeight: 1.66,
    fontStretch: 'condensed',
  },
  subtitle1: {
    fontSize: '0.875em',
    fontWeight: 500,
    lineHeight: 1.57,
    fontStretch: 'condensed',
  },
  subtitle2: {
    fontSize: '0.75em',
    fontWeight: 500,
    lineHeight: 1.66,
    fontStretch: 'condensed',
  },
  overline: {
    lineHeight: 1.66,
    fontStretch: 'condensed',
  },
  button: {
    fontStretch: 'condensed',
  },
});

export default Typography;
