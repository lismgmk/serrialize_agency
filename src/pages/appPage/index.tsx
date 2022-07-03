import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MAIN_PATH } from 'constants/routes';
import { MainPage } from 'pages/appPage/pages/MainPage';
import { ColorContainer } from 'containers/colorContainer';
import { PS_MAIN_WHITE } from 'mainStyles/GlobalTheme';
import { HeaderContainer } from 'containers/headerContainer';
import { FooterContainer } from 'containers/footerContainer';
import { AuthPage } from 'pages/appPage/pages/AuthPage';
import { PersonalAccount } from 'pages/appPage/pages/PersonalAccount';

export const maxWidthContainer = 1200;
export const AppPage = () => {
  return (
    <div>
      <ColorContainer width={maxWidthContainer} color={PS_MAIN_WHITE}>
        <HeaderContainer />
      </ColorContainer>
      <Switch>
        <Route exact path={MAIN_PATH.APP}>
          <MainPage />
        </Route>
        <Route exact path={MAIN_PATH.AUTHORISATION}>
          <AuthPage />
        </Route>
        <Route exact path={MAIN_PATH.PERSONAL}>
          <PersonalAccount />
        </Route>
      </Switch>
      <ColorContainer width={maxWidthContainer} color={PS_MAIN_WHITE}>
        <FooterContainer />
      </ColorContainer>
    </div>
  );
};
