import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { LocaleProvider } from 'antd';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import appReducer from './components/App/AppReducer';
import './index.scss';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  combineReducers({
    app: appReducer
  }),
  applyMiddleware(...middlewares)
);

ReactDOM.render(
  <LocaleProvider>
    <Provider store={store}>
      <Routes />
    </Provider>
  </LocaleProvider>,
  document.getElementById('root')
);

registerServiceWorker();
