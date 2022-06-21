import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import { ThreeDotsVerticalSvg } from 'svgIcons/ThreeDotsVerticalSvg';
import { FilterSvg } from 'svgIcons/FilterSvg';
import { TableRegistry } from 'components/tableRegistry';

export const TableMainContainer = () => {
  return (
    <Grid container direction="column">
      <Grid item sx={{ mb: 3.8, mt: 10 }} direction="row" justifyContent="flex-start" alignItems="center" container>
        <Grid item>
          <Typography variant={'h2'}>Реестры</Typography>
        </Grid>
        <Grid sx={{ flexGrow: 1 }} />
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ mr: 4 }}>
            <FilterSvg />
          </IconButton>
          <IconButton>
            <ThreeDotsVerticalSvg />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item container>
        <TableRegistry />
      </Grid>
    </Grid>
  );
};
