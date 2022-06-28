import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { NewsCards } from 'components/newsCards';
import { PaginationBox } from 'components/tableRegistry';
import { nanoid } from 'nanoid';

export const NewsContainer = () => {
  const countCard = [1, 2, 3, 4, 5, 6];
  return (
    <Box>
      <Box sx={{ mb: 3.8, pt: 10 }}>
        <Typography variant={'h2'}>Новости реестра</Typography>
      </Box>
      <Grid container spacing={2}>
        {countCard.map((el) => {
          return (
            <Grid item key={nanoid()}>
              <NewsCards />
            </Grid>
          );
        })}
      </Grid>
      <PaginationBox>
        <Button variant={'contained'} sx={{ height: 'inherit', borderRadius: 0, p: '15px 70px' }}>
          <Typography variant={'button'}>Показать все</Typography>
        </Button>
      </PaginationBox>
    </Box>
  );
};
