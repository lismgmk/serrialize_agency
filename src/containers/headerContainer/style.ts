import {
  AppBar,
  AppBarProps,
  Badge,
  BadgeProps,
  Box,
  BoxProps,
  StandardTextFieldProps,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface CustomTextFieldProps extends StandardTextFieldProps {
  bg?: boolean;
  width?: number;
  height?: number;
  borderColor?: string;
  colorAction?: string;
}

export const CustomAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.line.main}`,
}));

export const AvatarContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 20,
  borderLeft: `2px solid ${theme.palette.line.main}`,
}));
export const CustomBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .BaseBadge-badge': {
    fontSize: 12,
    borderRadius: 10,
    height: 18,
    weight: 18,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
    margin: -1,
    padding: 0,
  },
}));

export const CustomTextField = styled(TextField, {
  shouldForwardProp: (props) =>
    props !== 'bg' && props !== 'width' && props !== 'height' && props !== 'borderColor' && props !== 'colorAction',
})<CustomTextFieldProps>((props) => ({
  background: props.bg ? props.theme.palette.search.main : props.theme.palette.background.default,
  width: props.width,
  borderRadius: 5,
  border: `2px solid ${props.borderColor}`,
  placeholder: props.placeholder,
  fontSize: 14,
  fontWeight: 500,
  '& .MuiInputAdornment-root': {
    marginLeft: 12,
  },
  '& .MuiInputBase-root': {
    height: props.height,
    color: props.colorAction,
  },
}));

export const StyledToolbar = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
  height: 80,
  color: theme.palette.text.primary,
}));
