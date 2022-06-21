import { createTheme } from '@mui/material';
import shadows, { Shadows } from '@mui/material/styles/shadows';

export const PS_MAIN_BLUE = '#009CB4';
export const PS_MAIN_GREEN_LIGHT = '#95AE3C';
export const PS_MAIN_GREEN_DARK = '#487538';
export const PS_MAIN_GREY = '#4D4D4F';
export const PS_MAIN_BLACK = '#231F20';
export const PS_MAIN_WHITE = '#FFFFFF';
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
export const PS_PRIMARY_BACKGROUND = '#E5E5E5';
export const PS_OPTIONAL_BORDER = '#F4F3F5';

declare module '@mui/material/styles' {
  interface Theme {
    palette: IPalette;
  }
  interface PaletteOptions {
    search?: PaletteOptions['primary'];
    field?: PaletteOptions['primary'];
    line?: PaletteOptions['primary'];
    primarySecond?: PaletteOptions['primary'];
    optionalSecond?: PaletteOptions['primary'];
  }
  interface IPalette {
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    background: {
      paper: string;
      default: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    search: {
      main: string;
    };
    field: {
      main: string;
    };
    line: {
      main: string;
    };
    primarySecond: {
      main: string;
      light: string;
      dark: string;
    };
    optionalSecond: {
      main: string;
      light: string;
    };
  }

  interface ThemeOptions {
    primary?: {
      main?: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    };
    secondary?: {
      main?: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    };
    background?: {
      paper?: string;
      default?: string;
    };
    text?: {
      primary?: string;
      secondary?: string;
    };
    search?: {
      main?: string;
    };
    field?: {
      main?: string;
    };
    line?: {
      main?: string;
    };
    primarySecond?: {
      main?: string;
      light?: string;
      dark?: string;
    };
    optionalSecond?: {
      main?: string;
      light?: string;
    };
  }
}

export const themeCustom = createTheme({
  shadows: shadows.map(() => 'none') as Shadows,
  typography: {
    fontFamily: `"Manrope", sans-serif`,
    h1: {
      fontSize: 48,
      fontWeight: 700,
      color: PS_MAIN_BLACK,
    },
    h2: {
      fontSize: 36,
      fontWeight: 700,
      color: PS_MAIN_BLACK,
    },
    h3: {
      fontSize: 18,
      fontWeight: 600,
      color: PS_MAIN_BLACK,
    },
    h4: {
      fontSize: 16,
      fontWeight: 500,
      color: PS_OPTIONAL_TEXT_1,
    },
    h5: {
      fontSize: 14,
      fontWeight: 500,
      color: PS_OPTIONAL_TEXT_2,
    },
    h6: {
      fontSize: 18,
      fontWeight: 700,
      color: PS_MAIN_GREY,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 50,
      color: PS_MAIN_BLUE,
    },
    body1: {
      fontSize: 18,
      fontWeight: 500,
      color: PS_OPTIONAL_TEXT_1,
    },
    body2: {
      fontSize: 16,
      fontWeight: 500,
      color: PS_MAIN_GREY,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 500,
      color: PS_MAIN_BLUE,
    },
    caption: {
      fontSize: 18,
      fontWeight: 500,
      color: PS_MAIN_BLUE,
    },
    button: {
      fontSize: 18,
      fontWeight: 700,
      color: PS_MAIN_WHITE,
      background: PS_MAIN_BLUE,
    },
    overline: {
      fontSize: 14,
      fontWeight: 500,
      color: PS_OPTIONAL_GREY,
    },
  },
  palette: {
    primary: {
      main: PS_MAIN_BLUE,
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
      paper: PS_PRIMARY_BACKGROUND,
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
