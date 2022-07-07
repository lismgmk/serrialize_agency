import * as React from 'react';
import {styled} from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {AccordionSummaryProps} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';


const AccordionSummary = styled((props: AccordionSummaryProps) => <MuiAccordionSummary {...props} />)(() => ({
  borderBottom: 0,
  flexDirection: 'row-reverse',
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: '20px 15px 0px 42px',
}));
export const AccordionQuestions = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <MuiAccordion elevation={0} square  onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={
            expanded ? (
              <CloseIcon sx={{ width: 22, height: 22, color: 'text.primary' }} />
            ) : (
              <CloseIcon sx={{ transform: 'rotate(45deg)', width: 22, height: 22, color: 'text.primary' }} />
            )
          }
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography sx={{ ml: 2 }} variant={'h6'}>
            Связь с оператором реестра
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant={'body1'} sx={{ mb: 2 }}>
            1. Данные для авторизации в личном кабинете
          </Typography>{' '}
          <Typography variant={'body1'} sx={{ mb: 2 }}>
            2. Квалифицированный сертификат ключа проверки электронной подписи.{' '}
          </Typography>
          <Typography variant={'body1'} sx={{ mb: 2 }}>
            3. Сведения, документы и материалы в соответствии с Методическими рекомендациями.{' '}
          </Typography>
          <Typography variant={'body1'}>
            4. Установить специализированное ПО для подписания документов электронной подписью. Подписание производится
            с использованием усиленной квалифицированной (отсоединяемой) электронной подписи.{' '}
          </Typography>
        </AccordionDetails>
      </MuiAccordion>
    </div>
  );
};
