import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead, { TableHeadProps } from '@mui/material/TableHead';
import TableRow, { TableRowProps } from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box, BoxProps, Link, Pagination, SvgIcon, Typography } from '@mui/material';
import { nanoid } from 'nanoid';
import { ArrowLeftRightSvg } from 'svgIcons/ArrowLeftRightSvg';
import UsePagination from 'components/tableRegistry/hooks/pagination.effect';

function createData(num: string, name: string, className: string, classPo: string, datePo: string, link: string) {
  return { num, name, className, classPo, datePo, link };
}

const rows = [
  createData(
    '#1',
    'Система управления базами данных «Ред База Данных»',
    '02.06',
    'Системы управления базами данных',
    '29.01.2016',
    'Ссылка',
  ),
  createData(
    '#1',
    'Система управления базами данных «Ред База Данных»',
    '02.06',
    'Системы управления базами данных',
    '29.01.2016',
    'Ссылка',
  ),
  createData(
    '#1',
    'Система управления базами данных «Ред База Данных»',
    '02.06',
    'Системы управления базами данных',
    '29.01.2016',
    'Ссылка',
  ),
  createData(
    '#1',
    'Система управления базами данных «Ред База Данных»',
    '02.06',
    'Системы управления базами данных',
    '29.01.2016',
    'Ссылка',
  ),
];

export const CustomTableHead = styled(TableHead)<TableHeadProps>(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.line.main}`,
}));

export const CustomTableRow = styled(TableRow)<TableRowProps>(({ theme }) => ({
  padding: '20px 0px',
  display: 'grid',
  gridTemplateColumns: '1fr 1.6fr 0.5fr 1fr 0.6fr 0.5fr',
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

export const TableRegistry = () => {
  return (
    <TableContainer sx={{ background: 'inherit' }} component={Paper}>
      <Table sx={{}} size="small" aria-label="a dense table">
        <CustomTableHead>
          <CustomTableRow>
            <CustomTableCell>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <SvgIcon
                  sx={{ transform: 'rotate(90deg)', fontSize: 19, mr: 2, color: 'primary.contrastText' }}
                  component={ArrowLeftRightSvg}
                />
                <Typography variant={'subtitle1'}>Регистрационный номер</Typography>
              </Box>
            </CustomTableCell>
            <CustomTableCell>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <SvgIcon
                  sx={{ transform: 'rotate(90deg)', fontSize: 19, mr: 2, color: 'primary.contrastText' }}
                  component={ArrowLeftRightSvg}
                />
                <Typography variant={'subtitle1'}>Наименование программного обеспечения</Typography>
              </Box>
            </CustomTableCell>
            <CustomTableCell>
              <Typography variant={'subtitle1'}>Код класса</Typography>
            </CustomTableCell>
            <CustomTableCell>
              <Typography variant={'subtitle1'}>Класс программного обеспечения</Typography>
            </CustomTableCell>
            <CustomTableCell>
              <Typography variant={'subtitle1'}>Дата регистрации</Typography>
            </CustomTableCell>
            <CustomTableCell>
              <Typography variant={'subtitle1'}>Адрес сайта</Typography>
            </CustomTableCell>
          </CustomTableRow>
        </CustomTableHead>
        <TableBody>
          {rows.map((row) => (
            <CustomTableRow key={nanoid()}>
              <CustomTableCell>
                <Typography sx={{ pl: 4 }} variant={'body2'}>
                  {row.num}
                </Typography>
              </CustomTableCell>
              <CustomTableCell>
                <Typography sx={{ pl: 4 }} variant={'body2'}>
                  {row.name}
                </Typography>
              </CustomTableCell>
              <CustomTableCell>
                <Typography variant={'body2'}>{row.className}</Typography>
              </CustomTableCell>
              <CustomTableCell>
                <Typography variant={'body2'}>{row.className}</Typography>
              </CustomTableCell>
              <CustomTableCell>
                <Typography variant={'body2'}>{row.datePo}</Typography>
              </CustomTableCell>
              <CustomTableCell>
                <Link>
                  <Typography variant={'subtitle1'}>{row.link}</Typography>
                </Link>
              </CustomTableCell>
            </CustomTableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationBox>
        <Pagination siblingCount={0} boundaryCount={2} count={100} showFirstButton showLastButton />
        <UsePagination />
      </PaginationBox>
    </TableContainer>
  );
};
