import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStylesProject from 'mainStyles/globalStylesProject';
import { AppPage } from 'pages/appPage';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { createTheme, styled, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

import {
  PS_MAIN_BLACK,
  PS_MAIN_GREEN_DARK,
  PS_MAIN_GREEN_LIGHT,
  PS_MAIN_GREY,
  PS_MAIN_WHITE,
  PS_OPTIONAL_FIELD,
  PS_OPTIONAL_GREEN,
  PS_OPTIONAL_GREY,
  PS_OPTIONAL_LEAD,
  PS_OPTIONAL_LINE,
  PS_OPTIONAL_ORANGE,
  PS_OPTIONAL_RED,
  PS_OPTIONAL_SEARCH,
  PS_OPTIONAL_TEXT_1,
  PS_OPTIONAL_TEXT_2,
} from 'mainStyles/allColors';
import { Slider, SliderProps } from '@mui/material';
import shadows, { Shadows } from '@mui/material/styles/shadows';

declare module '@mui/material/Box' {
  interface BoxPropsVariantOverrides {
    line: true;
  }
  interface BoxPropsColorOverrides {
    line: true;
  }
}
declare module '@mui/material/styles' {
  interface Theme {}
  interface Palette {
    search: Palette['primary'];
    field: Palette['primary'];
    line: Palette['line'];
    primarySecond: Palette['primary'];
    optionalSecond: Palette['primary'];
  }

  interface PaletteOptions {
    search?: PaletteOptions['primary'];
    field?: PaletteOptions['primary'];
    line?: PaletteOptions['line'];
    primarySecond?: PaletteOptions['primary'];
    optionalSecond?: PaletteOptions['primary'];
  }
}
export const themeCustom = createTheme({
  shadows: shadows.map(() => 'none') as Shadows,
  palette: {
    primary: {
      main: PS_MAIN_GREEN_DARK,
      light: PS_MAIN_GREEN_LIGHT,
      dark: PS_MAIN_GREEN_DARK,
      contrastText: PS_OPTIONAL_TEXT_1,
    },
    secondary: {
      main: PS_OPTIONAL_LEAD,
      light: PS_OPTIONAL_GREY,
      dark: PS_OPTIONAL_GREEN,
      contrastText: PS_OPTIONAL_TEXT_2,
    },
    background: {
      paper: PS_MAIN_GREY,
      default: PS_MAIN_WHITE,
    },
    text: {
      primary: PS_MAIN_BLACK,
      secondary: PS_MAIN_GREY,
    },
    search: {
      main: PS_OPTIONAL_SEARCH,
    },
    field: {
      main: PS_OPTIONAL_FIELD,
    },
    line: {
      main: PS_OPTIONAL_LINE,
    },
    primarySecond: {
      main: PS_MAIN_GREY,
      light: PS_MAIN_WHITE,
      dark: PS_MAIN_BLACK,
    },
    optionalSecond: {
      main: PS_OPTIONAL_ORANGE,
      light: PS_OPTIONAL_RED,
    },
  },
});

interface StyledSliderProps extends SliderProps {
  col?: boolean;
}

const CustomizedSlider = styled(Slider, {
  shouldForwardProp: (prop) => prop !== 'col',
})<StyledSliderProps>(({ col, theme }) => ({
  color: col ? PS_OPTIONAL_GREY : PS_OPTIONAL_GREEN,
}));

// const StyledSlider = styled(Slider, {
//   shouldForwardProp: (prop) => prop !== 'success',
// })<StyledSliderProps>(({ success, theme }) => ({
//   width: 300,
//   ...(success && {
//     color: theme.palette.success.main,
//     '& .MuiSlider-thumb': {
//       [`&:hover, &.Mui-focusVisible`]: {
//         boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
//       },
//       [`&.Mui-active`]: {
//         boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
//       },
//     },
//   }),
// }));

export const App = () => {
  return (
    <ThemeProvider theme={themeCustom}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <GlobalStylesProject />
          <Provider store={store}>
            <AppPage />
            <CustomizedSlider col defaultValue={30} />
          </Provider>
        </BrowserRouter>
      </StyledEngineProvider>
    </ThemeProvider>
  );
};
