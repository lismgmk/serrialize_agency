import React from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import {
  CustomFooterBox,
  CustomGrid,
  CustomTypography,
  CustomTypographyH5,
  CustomTypographyH6,
  CustomTypographySubtitle,
} from './style';

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
          <Typography variant="inherit" sx={{ color: 'primary.contrastText', pt: 1.2, pb: 5, width: 0.7 }}>
            Открытое акционерное общество «Реестр ПО» начало практическую деятельность с 1 марта 2014 г
          </Typography>
          <Typography variant={'body2'} sx={{ fontWeight: 600 }}>
            Разработчик
          </Typography>
          <Typography variant={'inherit'} sx={{ color: 'primary.contrastText', pt: 1.1 }}>
            ОАО«Агентство сервисизации и реинжиниринга»
          </Typography>
          <Typography variant="inherit" sx={{ color: 'secondary.light' }}>
            Минск, улица Клары Цеткин, 24
          </Typography>
        </CustomGrid>
        <CustomGrid item xs={2}>
          <CustomTypographyH6 variant="h6">Информация</CustomTypographyH6>
          <CustomTypographySubtitle variant="subtitle2">Реестры</CustomTypographySubtitle>
          <CustomTypographySubtitle variant="subtitle2">Новости</CustomTypographySubtitle>
          <CustomTypographySubtitle variant="subtitle2">Документы</CustomTypographySubtitle>
          <CustomTypographySubtitle variant="subtitle2">Вопросы</CustomTypographySubtitle>
        </CustomGrid>
        <CustomGrid xs={3} item sx={{ color: 'text.secondary', fontSize: 14, lineHeight: 500 }}>
          <CustomTypographyH6 variant="h6">Техническая поддержка</CustomTypographyH6>
          <CustomTypographyH5 variant="h5">
            Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и праздничных дней.
          </CustomTypographyH5>
          <CustomTypography sx={{ pt: 1.1 }}>+375 25 111 22 33 </CustomTypography>
          <CustomTypography>+375 29 222 44 55</CustomTypography>
          <CustomTypography>ReestrPOsupport@mail.ru</CustomTypography>
        </CustomGrid>
        <CustomGrid xs={3} item>
          <CustomTypographyH6 variant="h6" sx={{ color: 'text.primary' }}>
            Контакты
          </CustomTypographyH6>
          <CustomTypography>+375 33 112 22 45</CustomTypography>
          <CustomTypography>+375 29 222 44 88</CustomTypography>
          <CustomTypography>ReesrtPO@mail.ru</CustomTypography>
          <CustomTypography>220004 г. Минск, ул. Карла Маркса, 38</CustomTypography>
          <Typography variant="subtitle2">
            <Link>Связаться с поддержкой</Link>
          </Typography>
        </CustomGrid>
      </Grid>
      <CustomFooterBox>
        <Typography variant={'inherit'}>© Copyright 2022— ОАО«РеестрПО». Всеправа защищены.</Typography>
      </CustomFooterBox>
    </Box>
  );
};
