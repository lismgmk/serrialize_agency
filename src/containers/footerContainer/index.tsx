import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { CustomFooterBox, CustomGrid } from './style';

export const FooterContainer = () => {
  return (
    <Box>
      <Grid sx={{ mb: 5, mt: 10 }} container>
        <CustomGrid xs={4} item>
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
          <Typography variant="inherit" sx={{ color: 'primary.contrastText', pt: 1.2, pb: 5 }}>
            Открытое акционерное общество «Реестр ПО» начало практическую деятельность с 1 марта 2014 г
          </Typography>
          <Typography variant={'body2'}>Разработчик</Typography>
          <Typography sx={{ color: 'primary.contrastText', pt: 1.1 }}>
            ОАО«Агентство сервисизации и реинжиниринга»
          </Typography>
          <Typography variant="inherit">Минск, улица Клары Цеткин, 24</Typography>
        </CustomGrid>
        <CustomGrid item xs={2}>
          <Typography>Информация</Typography>
          <Typography variant="inherit">Реестры</Typography>
          <Typography variant="inherit">Новости</Typography>
          <Typography variant="inherit">Документы</Typography>
          <Typography variant="inherit">Вопросы</Typography>
        </CustomGrid>
        <CustomGrid xs={3} item sx={{ color: 'text.secondary', fontSize: 14, lineHeight: 500 }}>
          <Typography>Техническая поддержка</Typography>
          <Typography sx={{ color: 'primary.contrastText' }}>
            Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и праздничных дней.
          </Typography>
          <Typography>+375 25 111 22 33 </Typography>
          <Typography>+375 29 222 44 55</Typography>
          <Typography>ReestrPOsupport@mail.ru</Typography>
        </CustomGrid>
        <CustomGrid xs={3} item>
          <Typography>Контакты</Typography>
          <Typography sx={{ color: 'text.secondary' }}>+375 33 112 22 45</Typography>
          <Typography sx={{ color: 'text.secondary' }}>+375 29 222 44 88</Typography>
          <Typography sx={{ color: 'text.secondary' }}>ReesrtPO@mail.ru</Typography>
          <Typography sx={{ color: 'text.secondary' }}>220004 г. Минск, ул. Карла Маркса, 38</Typography>
          <Typography sx={{ color: 'primary.main' }}>Связаться с поддержкой</Typography>
        </CustomGrid>
      </Grid>
      <CustomFooterBox>
        <Typography sx={{ color: 'secondary.light' }}>© Copyright 2022— ОАО«РеестрПО». Всеправа защищены.</Typography>
      </CustomFooterBox>
    </Box>
  );
};
