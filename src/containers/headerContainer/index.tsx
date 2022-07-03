import React from 'react';
import { AppBar, Avatar, Box, IconButton, InputAdornment, SvgIcon, Typography } from '@mui/material';
import { SearchSvg } from 'svgIcons/SearchSvg';
import { NotesCalendarSvg } from 'svgIcons/NotesCalendarSvg';
import { BellSvg } from 'svgIcons/BellSvg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AvatarContainer, CustomBadge, CustomTextField, StyledToolbar } from './style';

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
            <NotesCalendarSvg sx={{ width: 25, height: 25 }} />
          </IconButton>
          <IconButton size="large" color="inherit" sx={{ mr: 2.5, ml: 2.5 }}>
            <CustomBadge badgeContent={4}>
              <BellSvg sx={{ color: 'primary.main' }} />
            </CustomBadge>
          </IconButton>
          <AvatarContainer>
            <Avatar alt="Avatar" sx={{ width: 48, height: 48 }}>
              Av
            </Avatar>
            <Typography sx={{ color: 'text.secondary', padding: '0px 10px 0px 19px' }}>Захар Палазник</Typography>
            <KeyboardArrowDownIcon fontSize={'medium'} />
          </AvatarContainer>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};
