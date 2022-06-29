import React from 'react';
import { ColorContainer } from 'containers/colorContainer';
import { PS_MAIN_WHITE } from 'mainStyles/GlobalTheme';
import { maxWidthContainer } from 'pages/appPage';
import { AuthContainer } from 'containers/authContainer';

export const AuthPage = () => {
  return (
    <>
      <ColorContainer width={maxWidthContainer} color={PS_MAIN_WHITE}>
        <AuthContainer />
      </ColorContainer>
    </>
  );
};
