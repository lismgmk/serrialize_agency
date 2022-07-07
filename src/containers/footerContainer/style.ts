import { Box, BoxProps, Grid, GridProps, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterBoxUp = styled(Box)<BoxProps>(({ theme }) => ({
  paddingBottom: '80px',
  borderTop: `2px solid ${theme.palette.line.main}`,
}));
export const CustomFooterBox = styled(Box)<BoxProps>(({ theme }) => ({
  paddingTop: '20px',
  paddingBottom: '80px',
  borderTop: `2px solid ${theme.palette.line.main}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontWeight: 500,
  color: `${theme.palette.secondary.light}`,
}));

export const CustomGrid = styled(Grid)<GridProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '14px',
}));

export const CustomTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: `${theme.palette.text.secondary}`,
  fontWeight: 500,
  fontSize: '14px',
  paddingBottom: '10px',
}));

export const CustomTypographyH6 = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: `${theme.palette.text.primary}`,
  paddingBottom: '20px',
}));
export const CustomTypographySubtitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: `${theme.palette.text.secondary}`,
  paddingBottom: '10px',
}));

export const CustomTypographyH5 = styled(Typography)<TypographyProps>(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.line.main}`,
  color: `${theme.palette.primary.contrastText}`,
  paddingBottom: '10px',
}));
