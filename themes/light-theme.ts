import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // background:{
    //   default:"#98B6D5"
    // },
    primary: {
      main: '#112A51',
    },
    secondary: {
      main: '#112A51',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#FFF',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiDrawer: {
      defaultProps: {
        elevation: 1,
      },
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 5,
      },
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          color: '#112A51',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          color: '#112A51',
        },
      },
    },
  },
});
