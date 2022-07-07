import { styled } from '@mui/material/styles';
import { Box, BoxProps, Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  toggle?: boolean;
}

export const MenuButton = styled(Button, {
  shouldForwardProp: (props) => props !== 'toggle',
})<CustomButtonProps>((props) => ({
  position: props.toggle ? 'relative' : 'inherit',
  marginTop: '-2px',
  width: '270px',
  borderRadius: props.toggle ? '5px' : '0px',
  padding: '15px 20px',
  fontSize: '18px',
  fontWeight: 500,
  border: `2px solid ${props.toggle ? props.theme.palette.primary.main : props.theme.palette.line.main}`,
  background: props.theme.palette.background.default,
  color: props.toggle ? props.theme.palette.primary.main : props.theme.palette.primary.contrastText,
  textTransform: 'inherit',
  justifyContent: 'start',
}));

export const AvatarBoxPersonal = styled(Box)<BoxProps>(({ theme }) => ({
  paddingBottom: '36px',
  borderBottom: `2px solid ${theme.palette.line.main}`,
  display: 'flex',
  alignItems: 'center',
}));
export const AvatarBoxPersonalPassword = styled(Box)<BoxProps>(({ theme }) => ({
  borderTop: `2px solid ${theme.palette.line.main}`,
  borderBottom: `2px solid ${theme.palette.line.main}`,
}));
