import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box className="flex flex-row items-center space-x-6">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              <Link href="/">
                Pagination App
              </Link>
            </Typography>

            <Typography component="div" sx={{ flexGrow: 1 }}>
              <Link href="/simple" className='text-lg'>
                simple pagination
              </Link>
            </Typography>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <Link href="/infit" className='text-lg'>
                infinit pagination
              </Link>
            </Typography>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}