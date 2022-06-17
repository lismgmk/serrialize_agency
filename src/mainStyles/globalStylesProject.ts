import { createStyles, makeStyles } from '@material-ui/core';
import { PS_OPTIONAL_BACKGROUND, PS_OPTIONAL_TEXT_1 } from 'mainStyles/allColors';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
      body: {
        fontFamily: 'Manrope, serif',
        fontWidth: 500,
        fontSize: 16,
        background: `${PS_OPTIONAL_BACKGROUND}`,
        color: `${PS_OPTIONAL_TEXT_1}`,
        width: '100%',
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
        margin: 0,
        padding: 0,
      },
      '#root': {
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
      },
      pre: {
        margin: 0,
        padding: 0,
        fontFamily: 'Manrope, serif',
        fontWidth: 500,
        fontSize: 16,
      },
    },
  }),
);

const GlobalStylesProject = () => {
  useStyles();
  return null;
};

export default GlobalStylesProject;
