import React, { useState } from 'react';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import { CustomTextField } from 'containers/headerContainer/style';
import { MainButton } from 'containers/newsContainer/style';
import { PS_OPTIONAL_GREEN, PS_OPTIONAL_RED } from 'mainStyles/GlobalTheme';
import { CheckCircleSvg } from 'svgIcons/CheckCircleSvg';
import { MenuButton } from './style';
import { UserRoundSvg } from '../../svgIcons/UserRoundSvg';

export interface IButtonState {
  toggle: boolean;
  title: string;
  name: string;
}
const initialState: IButtonState[] = [
  { toggle: false, title: 'Мои данные', name: 'data' },
  { toggle: false, title: 'Уведомления', name: 'notifications' },
  { toggle: false, title: 'Реестры', name: 'registry' },
  { toggle: false, title: 'Метаданные', name: 'metaData' },
  { toggle: false, title: 'Безопасность', name: 'security' },
  { toggle: false, title: 'Мои загрузки', name: 'downloads' },
];
export const PersonalAccountContainer = () => {
  const [buttonState, setButtonState] = useState<IButtonState[]>(initialState);

  const handlerClick = (event: React.MouseEvent<HTMLElement>) => {
    const helperArr = buttonState.map((el) => {
      // @ts-ignore
      return el.name === event.target.name ? { ...el, toggle: true } : { ...el, toggle: false };
    });
    setButtonState(helperArr);
  };
  return (
    <Box>
      <Typography sx={{ mt: 10, mb: 5 }} variant={'h2'}>
        Личный кабинет
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          {buttonState.map((el) => {
            return (
              <MenuButton
                disableElevation
                disableRipple
                onClick={handlerClick}
                toggle={el.toggle}
                name={el.name}
                startIcon={<UserRoundSvg sx={{ width: 25, height: 25 }} color={'inherit'} />}
              >
                {el.title}
              </MenuButton>
            );
          })}
        </Grid>
        <Grid item xs={8}>
          <Avatar alt="Avatar" sx={{ width: 48, height: 48 }}>
            Av
          </Avatar>
          <Typography sx={{ color: 'text.secondary', padding: '0px 10px 0px 19px' }}>Захар Палазник</Typography>
          <Box sx={{ position: 'relative' }}>
            <Typography sx={{ color: 'secondary.contrastText', pb: 0.8 }} variant={'h5'}>
              Имя
            </Typography>
            <CustomTextField
              borderColor={PS_OPTIONAL_GREEN}
              sx={{
                '& .MuiInput-input': {
                  padding: '5px 18px',
                },
              }}
              InputProps={{
                disableUnderline: true,
              }}
              variant="standard"
              placeholder={'Введите имя'}
              bg
              width={430}
              height={56}
            />
            <CheckCircleSvg sx={{ width: 20, height: 20, ml: 1.5, position: 'absolute', top: '50%' }} />
          </Box>
          <Box sx={{ position: 'relative' }}>
            <Typography sx={{ color: 'secondary.contrastText', pb: 0.8 }} variant={'h5'}>
              Пароль
            </Typography>
            <CustomTextField
              colorAction={PS_OPTIONAL_GREEN}
              type={'password'}
              borderColor={PS_OPTIONAL_RED}
              sx={{
                '& .MuiInput-input': {
                  padding: '5px 18px',
                },
              }}
              InputProps={{
                disableUnderline: true,
              }}
              variant="standard"
              placeholder={'Введите пароль'}
              bg
              width={430}
              height={56}
            />
            <Typography sx={{ color: 'optionalSecond.light', pb: 0.8 }} variant={'h5'}>
              Неправильный пароль
            </Typography>
          </Box>
        </Grid>
        <MainButton sx={{ width: 430, height: 56 }}>
          <Typography variant={'inherit'}>Вход</Typography>
        </MainButton>
      </Grid>
    </Box>
  );
};
