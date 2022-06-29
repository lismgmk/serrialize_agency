import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { CustomTextField } from 'containers/headerContainer/style';
import { MainButton } from 'containers/newsContainer/style';
import Checkbox from '@mui/material/Checkbox';
export const AuthContainer = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Typography sx={{ mt: 10, mb: 5 }} variant={'h2'}>
        Авторизация
      </Typography>
      <Box>
        <Box>
          <Typography sx={{ color: 'secondary.contrastText', pb: 0.8 }} variant={'h5'}>
            Пароль
          </Typography>
          <CustomTextField
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
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography sx={{ color: 'secondary.contrastText', pb: 0.8 }} variant={'h5'}>
            Имя
          </Typography>
          <CustomTextField
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
        </Box>
        <Box sx={{ display: 'flex', mb: 3, mt: 3 }}>
          <Checkbox sx={{ color: 'primary.main', p: 0, mr: 1.2 }} size={'small'} />
          <Typography variant={'body2'} sx={{ color: 'secondary.contrastText' }}>
            Запомнить меня на этом компьютере
          </Typography>
        </Box>
        <MainButton sx={{ width: 430, height: 56 }}>
          <Typography variant={'inherit'}>Вход</Typography>
        </MainButton>

        <Typography sx={{ mt: 2.5, mb: 10 }} variant={'subtitle1'}>
          <Link> Забыли свой пароль? </Link>
        </Typography>
        <MainButton sx={{ width: 430, height: 56 }}>
          <Typography variant={'inherit'}>Авторизация с использованием ЕС ИФЮЛ</Typography>
        </MainButton>
        <MainButton sx={{ width: 430, height: 56 }}>
          <Typography variant={'inherit'}>Авторизация с использованием МСИ</Typography>
        </MainButton>

        <Typography sx={{ color: 'text.secondary' }} variant={'subtitle1'}>
          У вас нет аккаунта?
        </Typography>
        <Typography variant={'subtitle1'}>
          <Link> Нажмите сюда чтобы создать</Link>
        </Typography>
      </Box>
    </Box>
  );
};
