import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { store } from 'store';
import { GlobalStyle, ThemeProvider } from 'styles';
import { SampleProvider } from 'context';
import Routes from 'routes';

export const App: FC = () => (
  <ConfigProvider>
    <ThemeProvider>
      <GlobalStyle />
      <Provider store={store}>
        <SampleProvider>
          <Routes />
        </SampleProvider>
      </Provider>
    </ThemeProvider>
  </ConfigProvider>
);
