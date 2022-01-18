import { Box } from '@mui/material';
import React from 'react';

export const MenuMobile = props => {
  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 1000,
        backgroundColor: '#000',
        opacity: 0.6,
        display: props.isMenu ? 'block' : 'none',
      }}
    ></Box>
  );
};
