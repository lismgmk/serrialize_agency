import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const NoteBookmarkSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 32 32'} fill={'none'}>
      <path d="M21.3467 4H10.6667C6.98667 4 4 6.98667 4 10.6667V21.3467C4 25.0267 6.98667 28.0133 10.6667 28.0133H21.3467C25.0267 28.0133 28.0133 25.0267 28.0133 21.3467V10.6667C28.0133 6.98667 25.0267 4 21.3467 4ZM15.16 15.96L13.3333 16.8534V6.66667H18.68V16.8534L16.8533 15.96C16.32 15.6933 15.6933 15.6933 15.16 15.96ZM25.3467 21.3333C25.3467 23.5333 23.5467 25.3333 21.3467 25.3333H10.6667C8.46667 25.3333 6.66667 23.5333 6.66667 21.3333V10.6533C6.66667 8.45332 8.45332 6.66665 10.6533 6.65332V18.0533C10.6533 18.7066 10.9867 19.3067 11.5467 19.6667C12.12 20.0267 12.8133 20.0534 13.4133 19.7734L15.9867 18.52L18.56 19.7734C18.8266 19.9067 19.12 19.9733 19.4 19.9733C19.76 19.9733 20.1067 19.88 20.4267 19.68C20.9867 19.3333 21.32 18.7333 21.32 18.0666V6.66667C23.52 6.66667 25.32 8.46667 25.32 10.6667V21.3467L25.3467 21.3333Z" />
    </SvgIcon>
  );
};
