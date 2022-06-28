import { Box, BoxProps, Grid, GridProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomFooterBox = styled(Box)<BoxProps>(({ theme }) => ({
  paddingTop: '20px',
  paddingBottom: '80px',
  borderTop: `2px solid ${theme.palette.line.main}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
}));

export const CustomGrid = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '14px',
}));
