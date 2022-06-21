import React from 'react';
import { Button, Container } from '@mui/material';
import { HeaderContainer } from 'containers/headerContainer';

export const MainPage = () => {
  return (
    <Container sx={{ minWidth: 1200 }}>
      <HeaderContainer />
      <Button variant={'fullColor'}>Custom</Button>
    </Container>
  );
};
