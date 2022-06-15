import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import { createAPI } from './services/api';
import { reducer } from './store/reducer';
import { requareAuthorization } from './store/action';
import { AUTH_STATUS } from './constants/constant';
import { ThunkAppDispatch } from './types/action';
import { checkAuthAction, fetchFilmsListAction } from './store/api-actions';
import { redirect } from './store/middleware/redirect';

const api = createAPI(
  () => store.dispatch(requareAuthorization(AUTH_STATUS.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmsListAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
