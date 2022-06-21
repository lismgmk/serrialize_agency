import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStylesProject from 'mainStyles/globalStylesProject';
import { AppPage } from 'pages/appPage';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { themeCustom } from 'mainStyles/GlobalTheme';

export const App = () => {
  return (
    <ThemeProvider theme={themeCustom}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <GlobalStylesProject />
          <Provider store={store}>
            <AppPage />
          </Provider>
        </BrowserRouter>
      </StyledEngineProvider>
    </ThemeProvider>
  );
};
