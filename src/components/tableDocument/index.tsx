import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead, { TableHeadProps } from '@mui/material/TableHead';
import TableRow, { TableRowProps } from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box, BoxProps, Typography } from '@mui/material';
import { nanoid } from 'nanoid';
import { PaperSvg } from 'svgIcons/PaperSvg';
import { DownloadSvg } from 'svgIcons/DownloadSvg';

function createData(name: string, className: string, classPo: string, datePo: string, link: string) {
  return { name, className, classPo, datePo, link };
}

const rows = [
  createData(
    'Общие документы',
    'Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236',
    '20.07.2021',
    '1226',
    'Скачать (469 Кб)',
  ),
  createData(
    'Общие документы',
    'Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236',
    '20.07.2021',
    '1226',
    'Скачать (469 Кб)',
  ),
  createData(
    'Общие документы',
    'Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236',
    '20.07.2021',
    '1226',
    'Скачать (469 Кб)',
  ),
  createData(
    'Общие документы',
    'Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236',
    '20.07.2021',
    '1226',
    'Скачать (469 Кб)',
  ),
  createData(
    'Общие документы',
    'Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236',
    '20.07.2021',
    '1226',
    'Скачать (469 Кб)',
  ),
];

export const CustomTableHead = styled(TableHead)<TableHeadProps>(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.line.main}`,
}));

export const CustomTableRow = styled(TableRow)<TableRowProps>(({ theme }) => ({
  padding: '20px 0px',
  display: 'grid',
  gridTemplateColumns: '1fr 1.6fr 0.5fr 0.6fr 0.8fr',
  gridTemplateRows: 'max-content',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${theme.palette.line.main}`,
}));

export const CustomTableCell = styled(TableCell)<TableCellProps>(({ theme }) => ({
  borderBottom: 'none',
  padding: '0px',
}));
export const PaginationBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '80px',
  paddingTop: '40px',
}));

export const TableDocument = () => {
  return (
    <TableContainer sx={{ background: 'inherit', pb: 10 }} component={Paper}>
      <Table sx={{}} size="small" aria-label="a dense table">
        <CustomTableHead>
          <CustomTableRow>
            <CustomTableCell>
              <Typography variant={'subtitle1'}>Категория</Typography>
            </CustomTableCell>
            <CustomTableCell>
              <Typography variant={'subtitle1'}>Наименование</Typography>
            </CustomTableCell>
            <CustomTableCell>
              <Typography variant={'subtitle1'}>Дата</Typography>
            </CustomTableCell>
            <CustomTableCell>
              <Typography variant={'subtitle1'}>Номер</Typography>
            </CustomTableCell>
            <CustomTableCell sx={{ display: 'flex', alignItems: 'center' }}>
              <PaperSvg sx={{ width: 18, height: 18, color: 'primary.main' }} />
              <Typography sx={{ ml: 1.2 }} variant={'subtitle1'}>
                Содержание
              </Typography>
            </CustomTableCell>
          </CustomTableRow>
        </CustomTableHead>
        <TableBody>
          {rows.map((row) => (
            <CustomTableRow key={nanoid()}>
              <CustomTableCell>
                <Typography variant={'body2'}>{row.name}</Typography>
              </CustomTableCell>
              <CustomTableCell sx={{ pr: 12.5 }}>
                <Typography variant={'body2'}>{row.className}</Typography>
              </CustomTableCell>
              <CustomTableCell>
                <Typography variant={'body2'}>{row.classPo}</Typography>
              </CustomTableCell>
              <CustomTableCell>
                <Typography variant={'body2'}>{row.datePo}</Typography>
              </CustomTableCell>
              <CustomTableCell sx={{ display: 'flex', alignItems: 'center' }}>
                <DownloadSvg sx={{ width: 12, height: 15, color: 'primary.main' }} />
                <Typography sx={{ ml: 1.2 }} variant={'subtitle1'}>
                  {row.link}
                </Typography>
              </CustomTableCell>
            </CustomTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
