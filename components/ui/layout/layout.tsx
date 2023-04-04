import { Box, Container, Fab, Toolbar } from '@mui/material';
import Head from 'next/head';
import { FC } from 'react';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from '@ui/Partial/ScrollTop';
import Navbar from '@ui/navbar/navbar';

interface Props {
  title?: string;
  children?: any;
}

const Layout: FC<Props> = ({ title = 'Amacrux', children }) => {
  return (
    // <Box sx={{flexFlow:1}}>
    <Box sx={{ flexFlow: 1 }}>
      {/* <Box sx={{ display: 'flex' }}> */}
      <Head>
        <title>{title}</title>
      </Head>
      {/* <ElevationScroll {...children}> */}
      <Navbar />
      {/* </ElevationScroll> */}
      {/* <Sidebar/> */}

      <Toolbar id='back-to-top-anchor' />
      {/* <Box sx={{padding:'40px 40px'}}> */}
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
            <DrawerHeader />
            {children}
        </Box> */}
      {/* <Container maxWidth="sm"> */}
      <Box sx={{ paddingX: '24px ' }}>{children}</Box>
      {/* </Container> */}
      <ScrollTop {...children}>
        <Fab size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
};

export default Layout;
