
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from './reducer';
import { saga as httpSaga } from '../App/components/HttpImplementation/store';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      logger,
      sagaMiddleware,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
      actionSanitizer: action => ({
        ...action,
        type: action.type.toString(),
      }),
      serialize: true,
    }),
  ),
);

sagaMiddleware.run(httpSaga);

export default store;
