import { createTheme } from '@mui/material';

export const PS_MAIN_BLUE = '#009CB4';
export const PS_MAIN_GREEN_LIGHT = '#95AE3C';
export const PS_MAIN_GREEN_DARK = '#487538';
export const PS_MAIN_GREY = '#4D4D4F';
export const PS_MAIN_BLACK = '#231F20';
export const PS_MAIN_WHITE = '#FFFFFF';
export const PS_SECONDARY_BACKGROUND = '#FFFFFF';
export const PS_OPTIONAL_LEAD = '#D2D832';
export const PS_OPTIONAL_ORANGE = '#FAB42A';
export const PS_OPTIONAL_RED = '#E0371F';
export const PS_OPTIONAL_GREEN = '#00B247';
export const PS_OPTIONAL_GREY = '#C6C6C6';
export const PS_OPTIONAL_TEXT_1 = '#676A71';
export const PS_OPTIONAL_TEXT_2 = '#A8AAAE';
export const PS_OPTIONAL_SEARCH = '#F9F9FB';
export const PS_OPTIONAL_FIELD = '#F6F6F9';
export const PS_OPTIONAL_LINE = '#EDEDF4';
export const PS_OPTIONAL_BACKGROUND = '#FBFBFB';
export const PS_OPTIONAL_BORDER = '#F4F3F5';

const { palette } = createTheme();
export const themeCustom = createTheme({
  palette: {
    primary: {
      main: PS_MAIN_WHITE,
      light: PS_MAIN_BLUE,
      // dark: PS_MAIN_GREEN_DARK,
      contrastText: PS_OPTIONAL_TEXT_1,
    },
    secondary: {
      main: PS_OPTIONAL_LEAD,
      light: PS_OPTIONAL_GREY,
      // dark: PS_OPTIONAL_GREEN,
      contrastText: PS_OPTIONAL_TEXT_2,
    },
    background: {
      paper: PS_MAIN_WHITE,
      default: PS_MAIN_WHITE,
    },
    text: {
      primary: PS_MAIN_BLACK,
      secondary: PS_OPTIONAL_TEXT_1,
    },
    search: {
      main: PS_OPTIONAL_SEARCH,
    },
    field: {
      main: PS_OPTIONAL_FIELD,
    },
    line: {
      main: PS_OPTIONAL_LINE,
      light: PS_OPTIONAL_BORDER,
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

// declare module '@mui/material/styles' {
//   interface Theme {
// primary: {
//   main: string;
//   light: string;
//   dark: string;
//   contrastText: string;
// };
// secondary: {
//   main: PS_OPTIONAL_LEAD,
//   light: PS_OPTIONAL_GREY,
//   dark: PS_OPTIONAL_GREEN,
//   contrastText: PS_OPTIONAL_TEXT_2,
// },
// background: {
//   paper: PS_MAIN_GREY,
//   default: PS_MAIN_WHITE,
// },
//
// text: {
//   primary: PS_MAIN_BLACK,
//   secondary: PS_OPTIONAL_TEXT_1,
// },
// search: {
//   main: PS_OPTIONAL_SEARCH,
// },
// field: {
//   main: PS_OPTIONAL_FIELD,
// },
// line: {
//   main: PS_OPTIONAL_LINE,
// },
// primarySecond: {
//   main: PS_MAIN_GREY,
//   light: PS_MAIN_WHITE,
//   dark: PS_MAIN_BLACK,
// },
// optionalSecond: {
//   main: string;
//   light: string;
// };
// }
// allow configuration using `createTheme`
interface ThemeOptions {
  optionalSecond?: {
    main: string;
    light: string;
  };
}

declare module '@mui/material/styles' {
  interface Theme {}
  interface Palette {
    search: Palette['primary'];
    field: Palette['primary'];
    line: Palette['primary'];
    primarySecond: Palette['primary'];
    optionalSecond: Palette['primary'];
  }

  interface PaletteOptions {
    search?: PaletteOptions['primary'];
    field?: PaletteOptions['primary'];
    line?: PaletteOptions['primary'];
    primarySecond?: PaletteOptions['primary'];
    optionalSecond?: PaletteOptions['primary'];
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    fullColor: true;
    borderColor: true;
  }
  interface ButtonPropsColorOverrides {
    myAwesomeColor: true;
  }
}
declare module '@mui/material/Box' {
  interface BoxPropsVariantOverrides {
    line: true;
  }
  interface BoxPropsColorOverrides {
    line: true;
  }
}

// import * as React from 'react';
// import Button, { ButtonPropsColorOverrides } from '@mui/material/Button';
// import { createTheme, PaletteColorOptions, ThemeProvider } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';
// import { useTheme } from '@emotion/react';
//
// declare module '@mui/material/styles' {
//   interface Palette {
//     myAwesomeColor: PaletteColorOptions;
//   }
//   interface PaletteOptions {
//     myAwesomeColor: PaletteColorOptions;
//   }
// }
//
// declare module '@mui/material/Button' {
//   interface ButtonPropsColorOverrides {
//     myAwesomeColor: true;
//   }
// }
//
// const { palette } = createTheme();
// const theme = createTheme({
//   palette: {
//     myAwesomeColor: palette.augmentColor({ color: purple }),
//     // Use this code if you want to use an arbitrary color
//     myAwesomeColor: palette.augmentColor({
//       color: {
//         main: '#00ff00',
//       },
//     }),
//   },
// });
//
// function Content() {
//   const theme = useTheme();
//   console.log(theme);
//   return <div>{}</div>;
// }
//
// export default function CustomStyles() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Button color="myAwesomeColor" variant="contained">
//         AWESOME
//       </Button>
//       <Content />
//     </ThemeProvider>
//   );
// }
