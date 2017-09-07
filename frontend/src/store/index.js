import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import createLogger from 'redux-logger';
import userState from './userState/userState';
import roomState from './roomState/roomState';
import observeStore from './observeStore';
import subscribeToUpdates from './subscribeToUpdates';

const reducers = {
  userState,
  roomState,
};


const composeEnhancers = compose;
const logger = createLogger();
const middlewares = [apiMiddleware, thunk, logger];

const store =
observeStore(
  createStore(
    combineReducers(reducers),
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )
);

subscribeToUpdates(store);

export default store;
