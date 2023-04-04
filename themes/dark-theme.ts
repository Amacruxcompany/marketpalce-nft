import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // background:{
    //   default:"#1B1E40"
    // },
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#8BF7D1',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            'linear-gradient(119.95deg, #2A1B40 3.52%, #390075 45.5%, #0E274B 93.24%)',
          // background: 'linear-gradient(119.95deg, #1B1E40 3.52%, #21376E 45.5%, #0E274B 93.24%)',
          // background: 'linear-gradient(119.95deg, #1B1E40 3.52%, #390075 45.5%, #0E274B 93.24%)',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiDrawer: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
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
    MuiCard: {
      defaultProps: {
        elevation: 10,
      },
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    // MuiPaper:{
    //   defaultProps:{
    //     elevation:0
    //   },
    //   styleOverrides:{
    //     root:{
    //       backgroundColor:"transparent"
    //     }
    //   }
    // }
  },
});
