import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import GlobalStylesProject from 'mainStyles/globalStylesProject';
import { AppPage } from 'pages/appPage';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

export const App = () => {
  return (
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <GlobalStylesProject />
          <Provider store={store}>
            <AppPage />
          </Provider>
        </BrowserRouter>
      </StyledEngineProvider>
  );
};
