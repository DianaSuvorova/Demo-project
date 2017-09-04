import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { apiMiddleware } from 'redux-api-middleware';
import createLogger from 'redux-logger';
import userState from './userState/userState';
import roomState from './roomState/roomState';
import observeStore from './observeStore';


const reducers = {
  userState,
  roomState,
};


const composeEnhancers = compose;
const logger = createLogger();
const middlewares = [apiMiddleware, thunk, promiseMiddleware, logger];

const store = observeStore(
  createStore(
    combineReducers(reducers),
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )
);

export default store;
