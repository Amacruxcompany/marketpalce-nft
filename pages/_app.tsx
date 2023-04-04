import 'react-slideshow-image/dist/styles.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Web3Provider } from '@providers';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UIProvider } from 'context/ui';
import { ColorModeContext } from 'context/theme';
import { useEffect, useMemo, useState } from 'react';
import Cookies from 'js-cookie';
import { darkTheme, lightTheme } from 'themes';
import { CreateNftProvider } from 'context/nft';

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => {
    return mode === 'light' ? lightTheme : darkTheme;
  }, [mode]);

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light';
    // const selectedTheme = cookieTheme === 'light' ? 'light' : 'dark';
    const selectedTheme = 'dark';

    if (cookieTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    Cookies.set('theme', selectedTheme);

    setMode(selectedTheme);
  }, [theme]);

  return (
    <>
      <UIProvider>
        <ToastContainer />
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Web3Provider>
              <CreateNftProvider>
                <Component {...pageProps} />
              </CreateNftProvider>
            </Web3Provider>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </UIProvider>
    </>
  );
}

export default MyApp;
