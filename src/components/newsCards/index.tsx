import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { NotesCalendarSvg } from 'svgIcons/NotesCalendarSvg';

export const NewsCards = () => {
  return (
    <Grid container>
      <Grid item>
        <Card sx={{ maxWidth: 370, height: 357 }}>
          <CardMedia
            sx={{ display: 'block', width: 370, borderRadius: 0.8 }}
            height="220"
            component="img"
            image={'/techSkills.png'}
            alt="tech skills"
          />
          <CardContent sx={{ p: 0, mt: 2.5 }}>
            <Typography variant="h3" component="div">
              Технические работы 30.05.2022
            </Typography>
            <Box sx={{ display: 'flex', mt: 1.2, mb: 1.2 }}>
              <NotesCalendarSvg sx={{ weight: 18, height: 19, mr: 1.2 }} />
              <Typography variant="h5" component="div">
                30.05.2022
              </Typography>
            </Box>

            <Typography variant="h4">
              В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
