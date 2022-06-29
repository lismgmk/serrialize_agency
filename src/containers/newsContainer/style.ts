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
