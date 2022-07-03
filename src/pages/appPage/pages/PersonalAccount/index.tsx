import React from 'react';
import { ColorContainer } from 'containers/colorContainer';
import { PS_MAIN_WHITE } from 'mainStyles/GlobalTheme';
import { maxWidthContainer } from 'pages/appPage';
import { PersonalAccountContainer } from 'containers/personalAccountContainer';

export const PersonalAccount = () => {
  return (
    <>
      <ColorContainer width={maxWidthContainer} color={PS_MAIN_WHITE}>
        <PersonalAccountContainer />
      </ColorContainer>
    </>
  );
};
