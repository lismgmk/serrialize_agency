import React from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  BadgeProps,
  Box,
  BoxProps,
  IconButton,
  InputAdornment,
  StandardTextFieldProps,
  SvgIcon,
  TextField,
  Toolbar,
  ToolbarProps,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { SearchSvg } from 'svgIcons/SearchSvg';
import { NotesCalendarSvg } from 'svgIcons/NotesCalendarSvg';
import { BellSvg } from 'svgIcons/BellSvg';
import { PS_MAIN_BLUE } from 'mainStyles/allColors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface CustomTextFieldProps extends StandardTextFieldProps {
  bg?: boolean;
  width?: number;
  height?: number;
}

const AvataContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 20,
  borderLeft: `2px solid ${theme.palette.success.main}`,
}));
const CustomBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .BaseBadge-badge': {
    fontSize: 12,
    borderRadius: 10,
    height: 18,
    weight: 18,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.background.default,
    margin: -1,
    padding: 0,
  },
}));

const CustomTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== 'bg' && props !== 'width' && props !== 'height',
})<CustomTextFieldProps>((props) => ({
  background: props.bg ? props.theme.palette.search.main : props.theme.palette.background.paper,
  width: props.width,
  borderRadius: 5,
  placeholder: props.placeholder,
  fontSize: 14,
  fontWeight: 500,
  '& .MuiInputAdornment-root': {
    marginLeft: 12,
  },
  '& .MuiInputBase-root': {
    height: props.height,
  },
}));

const StyledToolbar = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export const HeaderContainer = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Box
          component="img"
          sx={{
            height: 40,
            width: 170,
            mr: 4,
          }}
          src={'/logo.png'}
          alt="Company avatar"
        />
        <CustomTextField
          variant="standard"
          placeholder={'Поиск'}
          bg
          width={270}
          height={48}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon fontSize={'medium'} component={SearchSvg} />
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton size="large" color="inherit">
            <SvgIcon fontSize={'small'} component={NotesCalendarSvg} />
          </IconButton>
          <IconButton size="large" color="inherit" sx={{ mr: 2.5, ml: 2.5 }}>
            <CustomBadge badgeContent={4}>
              <BellSvg color={PS_MAIN_BLUE} />
            </CustomBadge>
          </IconButton>
          <AvataContainer>
            <Avatar alt="Avatar" sx={{ width: 48, height: 48 }}>
              Av
            </Avatar>
            <Typography sx={{ color: 'text.secondary', padding: '0px 10px 0px 19px' }}>Захар Палазник</Typography>
            <KeyboardArrowDownIcon fontSize={'medium'} />
          </AvataContainer>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};
