import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';
import userState from './userState/userState';
import roomState from './roomState/roomState';


const reducers = {
  userState,
  roomState,
};


const composeEnhancers = compose;
const logger = createLogger();
const middlewares = [thunk, promiseMiddleware, logger];

const store = createStore(
  combineReducers(reducers),
  composeEnhancers(
    applyMiddleware(...middlewares)
  ),
);

export default store;
