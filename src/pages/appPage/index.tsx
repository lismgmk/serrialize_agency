import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MAIN_PATH } from 'constants/routes';
import { MainPage } from 'pages/appPage/pages/MainPage';

export const AppPage = () => {
  return (
    <div>
      <Switch>
        <Route path={MAIN_PATH.APP}>
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
};
