import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import watchImages from '../sagas/testSaga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const enhancer = applyMiddleware(...middlewares);
  const store = createStore(
    rootReducer,
    /* preloadedState, */
    enhancer
  );
  sagaMiddleware.run(watchImages);
  return store;
};


export default configureStore;
