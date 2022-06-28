import React from 'react';
import { Box, Typography } from '@mui/material';
import { TableDocument } from 'components/tableDocument';

export const DocumentContainer = () => {
  return (
    <Box>
      <Box sx={{ mb: 3.8, mt: 10 }}>
        <Typography variant={'h2'}>Документы</Typography>
        <Box sx={{ mt: 1.2, mb: 5, display: 'flex' }}>
          <Typography variant={'h3'} sx={{ color: 'primarySecond.main' }}>
            Всего документов:&nbsp;
          </Typography>
          <Typography variant={'h3'} sx={{ color: 'primary.main' }}>
            5
          </Typography>
        </Box>
      </Box>
      <TableDocument />
    </Box>
  );
};
