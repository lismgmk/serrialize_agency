import React from 'react';
import { Box, Button, Card, Grid, InputAdornment, SvgIcon, Typography } from '@mui/material';
import { SearchSvg } from 'svgIcons/SearchSvg';
import { CustomTextField } from 'containers/headerContainer/style';

export const MainLabelContainer = () => {
  return (
    <Grid sx={{ height: 620 }} direction="column" justifyContent="center" alignItems="stretch" container>
      <Grid item xs={6}>
        <Box sx={{ width: 450 }}>
          <Typography sx={{ mb: 2.5 }} variant={'h1'}>
            РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ
          </Typography>
          <Typography sx={{ mb: 2.5 }}>
            Единый реестр программ для электронных вычислительных машин и баз данных
          </Typography>
          <Box>
            <Typography sx={{ display: 'flex' }}>
              Включено ПО в реестр:&nbsp; <Typography variant={'subtitle1'}>13 438</Typography>
            </Typography>

            <Typography sx={{ display: 'flex', mb: 5 }}>
              Правообладателей:&nbsp;<Typography variant={'subtitle1'}>4 272</Typography>
            </Typography>
          </Box>
          <Card sx={{ height: 56, borderRadius: 1, width: 447 }}>
            <CustomTextField
              sx={{ borderRadius: 0 }}
              variant="standard"
              placeholder={'Искать реестр...'}
              width={330}
              height={56}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon fontSize={'medium'} component={SearchSvg} />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant={'contained'} sx={{ height: 'inherit', borderRadius: 0, p: '0px 22.5px' }}>
              <Typography variant={'button'}>Искать</Typography>
            </Button>
          </Card>
        </Box>
      </Grid>
      <Grid sx={{ display: 'flex', justifyContent: 'end' }} item xs={6}>
        <Box
          component="img"
          sx={{
            height: 502,
            width: 505,
          }}
          src={'/officeWork.png'}
          alt="Company avatar"
        />
      </Grid>
    </Grid>
  );
};
