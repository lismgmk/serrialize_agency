import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { NewsCards } from 'components/newsCards';
import { PaginationBox } from 'components/tableRegistry';
import { nanoid } from 'nanoid';
import { MainButton } from './style';

export const NewsContainer = () => {
  const countCard = [1, 2, 3, 4, 5, 6];
  return (
    <Box>
      <Box sx={{ mb: 3.8, pt: 10 }}>
        <Typography variant={'h2'}>Новости реестра</Typography>
      </Box>
      <Grid container spacing={2}>
        {countCard.map((_) => {
          return (
            <Grid item key={nanoid()}>
              <NewsCards />
            </Grid>
          );
        })}
      </Grid>
      <PaginationBox>
        <MainButton sx={{ pr: 8.8, pl: 8.8 }}>
          <Typography variant={'inherit'}>Показать все</Typography>
        </MainButton>
      </PaginationBox>
    </Box>
  );
};
