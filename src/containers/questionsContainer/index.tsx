import React from 'react';
import { Grid, Typography } from '@mui/material';
import { AccordionQuestions } from 'components/accordionQuestions';

export const QuestionsContainer = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <Grid container>
      <Grid item xs={5}>
        <Typography sx={{ mb: 3.8, mt: 10 }} variant={'h2'}>
          Вопрос-ответ
        </Typography>
      </Grid>
      <Grid item xs={7} sx={{ mb: 10.1, mt: 10.1 }}>
        {arr.map((el) => (
          <AccordionQuestions key={el} />
        ))}
      </Grid>
    </Grid>
  );
};
