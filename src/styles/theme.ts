import { createMuiTheme, Theme, responsiveFontSizes } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    tetriary: PaletteColor;
    contrast: PaletteColor;
    hyperlink: PaletteColor;
    contactTextColor: PaletteColor;
    contactTextError: PaletteColor;
  }
  interface PaletteOptions {
    tetriary?: PaletteColorOptions;
    contrast?: PaletteColorOptions;
    hyperlink?: PaletteColorOptions;
    contactTextColor?: PaletteColorOptions;
    contactTextError?: PaletteColorOptions;
  }
}

const muiTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(38, 38, 38)',
    },
    secondary: {
      main: 'rgb(242, 242, 242)',
    },
    tetriary: {
      main: 'rgb(227, 227, 227)',
    },
    contrast: {
      main: 'rgb(255, 255, 255)',
    },
    hyperlink: {
      main: 'rgb(87, 187, 191)',
    },
    contactTextColor: {
      main: 'rgb(85, 85, 85)',
    },
    contactTextError: {
      main: 'rgb(192, 36, 37)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 374,
      md: 800,
      lg: 1024,
      xl: 1920,
    },
  },
});

export default responsiveFontSizes(muiTheme);
