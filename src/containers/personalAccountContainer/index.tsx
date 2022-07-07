import React, { useState } from 'react';
import { Autocomplete, Avatar, Box, Grid, IconButton, InputAdornment, InputLabel, Typography } from '@mui/material';
import { AvatarBoxPersonal, AvatarBoxPersonalPassword, MenuButton } from './style';
import { useGetIconButtonEffect } from './hooks/getIconButton.effect';
import { LogoutSvg } from '../../svgIcons/LogoutSvg';
import { PS_OPTIONAL_GREEN, PS_OPTIONAL_RED } from '../../mainStyles/GlobalTheme';
import { CustomTextField } from 'containers/headerContainer/style';
import { MainButton } from 'containers/newsContainer/style';
import { Visibility, VisibilityOff } from '@material-ui/icons';
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

const defaultPropsCountries = [{ label: 'Belarus' }, { label: 'England' }, { label: 'Brazil' }];
const defaultPropsCities = [{ label: 'Minsk' }, { label: 'London' }, { label: 'Peru' }];
export const PersonalAccountContainer = () => {
  const [buttonState, setButtonState] = useState<IButtonState[]>(initialState);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { getIconButton } = useGetIconButtonEffect();
  const handlerLogout = () => {};
  const handlerClick = (event: React.MouseEvent<HTMLElement>) => {
    const helperArr = buttonState.map((el) => {
      // @ts-ignore
      return el.name === event.target.name ? { ...el, toggle: true } : { ...el, toggle: false };
    });
    setButtonState(helperArr);
  };
  return (
    <Box sx={{ mb: 10 }}>
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
                startIcon={getIconButton(el.name)}
              >
                {el.title}
              </MenuButton>
            );
          })}
          <MenuButton
            sx={{ color: 'optionalSecond.light' }}
            disableElevation
            disableRipple
            onClick={handlerLogout}
            startIcon={<LogoutSvg sx={{ width: 25, height: 20, color: 'optionalSecond.light' }} />}
          >
            Выход
          </MenuButton>
        </Grid>
        <Grid item xs={8}>
          <AvatarBoxPersonal>
            <Avatar alt="Avatar" sx={{ width: 64, height: 64 }}>
              <UserRoundSvg />
            </Avatar>
            <Typography variant="h2" sx={{ fontSize: 24, pl: 2.2 }}>
              Здравствуй, Захар!
            </Typography>
          </AvatarBoxPersonal>
          <Typography sx={{ mt: 4.2 }} variant={'h6'}>
            Основные данные
          </Typography>
          <Grid spacing={2} container>
            <Grid item sx={{ mt: 1.2 }}>
              <Box sx={{ position: 'relative' }}>
                <Typography sx={{ color: 'secondary.contrastText', pb: 0.8 }} variant={'h5'}>
                  Имя
                </Typography>
                <CustomTextField
                  autoComplete="new-password"
                  name="name"
                  borderColor={PS_OPTIONAL_GREEN}
                  sx={{
                    '& .MuiInput-input': {
                      padding: '5px 18px',
                    },
                  }}
                  InputProps={{
                    disableUnderline: true,
                    autoComplete: 'new-password',
                  }}
                  variant="standard"
                  placeholder={'Введите имя'}
                  bg
                  width={370}
                  height={52}
                />
              </Box>
            </Grid>
            <Grid sx={{ mt: 1.2 }} item>
              <Box sx={{ position: 'relative' }}>
                <Typography sx={{ color: 'secondary.contrastText', pb: 0.8 }} variant={'h5'}>
                  Фамилия
                </Typography>
                <CustomTextField
                  autoComplete="new-password"
                  name="name"
                  borderColor={PS_OPTIONAL_GREEN}
                  sx={{
                    '& .MuiInput-input': {
                      padding: '5px 18px',
                    },
                  }}
                  InputProps={{
                    disableUnderline: true,
                    autoComplete: 'new-password',
                  }}
                  variant="standard"
                  placeholder={'Введите Фамилию'}
                  bg
                  width={370}
                  height={52}
                />
              </Box>
            </Grid>
            <Grid sx={{ mt: 1.2 }} item>
              <Box sx={{ position: 'relative' }}>
                <Typography sx={{ color: 'secondary.contrastText', pb: 0.8 }} variant={'h5'}>
                  Отчество
                </Typography>
                <CustomTextField
                  autoComplete="new-password"
                  name="name"
                  borderColor={PS_OPTIONAL_GREEN}
                  sx={{
                    '& .MuiInput-input': {
                      padding: '5px 18px',
                    },
                  }}
                  InputProps={{
                    disableUnderline: true,
                    autoComplete: 'new-password',
                  }}
                  variant="standard"
                  placeholder={'Введите Отчество'}
                  bg
                  width={370}
                  height={52}
                />
              </Box>
            </Grid>
            <Grid sx={{ mt: 1.2 }} item>
              <Box sx={{ position: 'relative' }}>
                <Typography sx={{ color: 'secondary.contrastText', pb: 0.8 }} variant={'h5'}>
                  Страна
                </Typography>
                <Autocomplete
                  sx={{ width: 300 }}
                  disablePortal
                  options={defaultPropsCountries}
                  renderInput={(params) => (
                    <CustomTextField
                      {...params}
                      sx={{
                        '& .MuiInput-input': {
                          padding: '5px 18px',
                        },
                        '& label.Mui-focused': {
                          color: 'secondary.dark',
                        },
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: 'secondary.dark',
                          },
                        },
                      }}
                      placeholder={'Выберите Страну'}
                      bg
                      width={370}
                      height={56}
                    />
                  )}
                />
              </Box>
            </Grid>{' '}
            <Grid sx={{ mt: 1.2, mb: 4.2 }} item>
              <Box sx={{ position: 'relative' }}>
                <Typography sx={{ color: 'secondary.contrastText', pb: 0.8 }} variant={'h5'}>
                  Город
                </Typography>
                <Autocomplete
                  sx={{ width: 370 }}
                  disablePortal
                  options={defaultPropsCities}
                  renderInput={(params) => (
                    <CustomTextField
                      {...params}
                      sx={{
                        '& .MuiInput-input': {
                          padding: '5px 18px',
                        },
                        '& label.Mui-focused': {
                          color: 'secondary.dark',
                        },
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: 'secondary.dark',
                          },
                        },
                      }}
                      placeholder={'Выберите Город'}
                      bg
                      width={370}
                      height={56}
                    />
                  )}
                />
              </Box>
            </Grid>
            <Grid sx={{ mt: 1.2, mb: 4.2 }} item>
              <Box sx={{ position: 'relative' }}>
                <Typography sx={{ color: 'secondary.contrastText', pb: 0.8 }} variant={'h5'}>
                  Телефон
                </Typography>
                <CustomTextField
                  sx={{
                    '& .MuiInput-input': {
                      padding: '5px 18px',
                    },
                  }}
                  InputProps={{
                    disableUnderline: true,
                    autoComplete: 'new-password',
                  }}
                  name="telephone"
                  autoComplete="new-password"
                  // autoComplete="off"
                  colorAction={PS_OPTIONAL_GREEN}
                  type={'tel'}
                  borderColor={PS_OPTIONAL_RED}
                  variant="standard"
                  placeholder={'Введите телефон'}
                  bg
                  width={370}
                  height={56}
                />
                <Typography sx={{ color: 'optionalSecond.light', pb: 0.8 }} variant={'h5'}>
                  Неправильный пароль
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <AvatarBoxPersonalPassword>
            <Typography sx={{ mt: 4.2 }} variant={'h6'}>
              Пароль
            </Typography>
            <Grid container spacing={2}>
              <Grid sx={{ mt: 1.2, mb: 4.2 }} item>
                <Box sx={{ position: 'relative' }}>
                  <Typography sx={{ color: 'secondary.contrastText', pb: 0.8 }} variant={'h5'}>
                    Пароль
                  </Typography>
                  <CustomTextField
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    autoComplete="new-password"
                    colorAction={PS_OPTIONAL_GREEN}
                    borderColor={PS_OPTIONAL_RED}
                    sx={{
                      '& .MuiInput-input': {
                        padding: '5px 18px',
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => {
                              event.preventDefault();
                            }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    placeholder={'Введите пароль'}
                    bg
                    width={370}
                    height={56}
                  />
                  <Typography sx={{ color: 'optionalSecond.light', pb: 0.8 }} variant={'h5'}>
                    Неправильный пароль
                  </Typography>
                </Box>
              </Grid>

              <Grid sx={{ mt: 1.2, mb: 4.2 }} item>
                <Box sx={{ position: 'relative' }}>
                  <InputLabel htmlFor="standard-adornment-password">
                    <Typography sx={{ color: 'secondary.contrastText', pb: 0.8 }} variant={'h5'}>
                      Пароль
                    </Typography>
                  </InputLabel>
                  <CustomTextField
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    autoComplete="new-password"
                    colorAction={PS_OPTIONAL_GREEN}
                    borderColor={PS_OPTIONAL_RED}
                    sx={{
                      '& .MuiInput-input': {
                        padding: '5px 18px',
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => {
                              event.preventDefault();
                            }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    placeholder={'Введите пароль'}
                    bg
                    width={370}
                    height={56}
                  />
                  <Typography sx={{ color: 'optionalSecond.light', pb: 0.8 }} variant={'h5'}>
                    Неправильный пароль
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </AvatarBoxPersonalPassword>
          <MainButton sx={{ width: 270, height: 56, mt: 4.5 }}>
            <Typography variant={'inherit'}>Показать все</Typography>
          </MainButton>
        </Grid>
      </Grid>
    </Box>
  );
};
