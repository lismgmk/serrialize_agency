import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Button, Typography } from '@mui/material';

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
});

export const CustomPagination = () => {
  const { items } = usePagination({
    count: 100,
    siblingCount: 0,
    boundaryCount: 2,
    showFirstButton: true,
    showLastButton: true,
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = (
              <Button
                disabled
                sx={{
                  minWidth: 10,
                  minHeight: 40,
                  p: 0,
                  backgroundColor: 'background.default',
                }}
              >
                <Typography variant={'body1'}>...</Typography>
              </Button>
            );
          } else if (type === 'page') {
            children = (
              <Button
                sx={{
                  minWidth: 40,
                  minHeight: 40,
                  p: 0,
                  backgroundColor: selected ? 'primary.main' : 'background.default',
                  '&:hover': {
                    backgroundColor: `rgba(0, 156, 180, 0.5)`,
                  },
                }}
                type="button"
                {...item}
              >
                <Typography
                  sx={{
                    color: selected ? 'background.default' : 'text.secondary',
                  }}
                  variant={'body1'}
                >
                  {page}
                </Typography>
              </Button>
            );
          } else {
            children = (
              <Button
                sx={{
                  minWidth: 40,
                  minHeight: 40,
                  p: 0,
                  backgroundColor: selected ? 'primary.main' : 'background.default',
                  '&:hover': {
                    backgroundColor: `rgba(0, 156, 180, 0.5)`,
                  },
                }}
                type="button"
                {...item}
              >
                {type === 'previous' && <ArrowForwardIosIcon sx={{ transform: 'rotate(180deg)' }} />}
                {type === 'next' && <ArrowForwardIosIcon />}
                {type === 'first' && <DoubleArrowIcon sx={{ transform: 'rotate(180deg)' }} />}
                {type === 'last' && <DoubleArrowIcon />}
              </Button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
};
