import React from 'react';
import { Box, Container } from '@mui/material';

export const ColorContainer = (props: { children: React.ReactNode; color: string; width: number }) => {
  return (
    <Box sx={{ backgroundColor: props.color }}>
      <Container sx={{ maxWidth: props.width }}>{props.children}</Container>
    </Box>
  );
};
