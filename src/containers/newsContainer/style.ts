import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MainButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: '5px',
  paddingTop: '15px',
  paddingBottom: '15px',
  fontSize: '18px',
  fontWeight: 700,
  color: theme.palette.background.default,
  textTransform: 'inherit',
  '&: hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const SecondaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: '430px',
  height: '56px',
  borderRadius: '5px',
  paddingTop: '15px',
  paddingBottom: '15px',
  fontSize: '14px',
  fontWeight: 500,
  border: `2px solid ${theme.palette.line.main}`,
  background: theme.palette.background.default,
  color: theme.palette.primarySecond.main,
  textTransform: 'inherit',
  '&: hover': {
    backgroundColor: theme.palette.background.default,
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
  },
}));
