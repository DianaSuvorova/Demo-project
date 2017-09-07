import { CALL_API } from 'redux-api-middleware';
import { REQUEST, FAILURE, CHAT_ROOMS_SUCCESS, SET_USER_NAME, SET_PUSH_NOTIFICATION } from '../constants';
import { apiBase } from '../../helpers';

export function getRooms() {
  return {
    [CALL_API]: {
      endpoint: `${apiBase}/rooms`,
      method: 'GET',
      types: [REQUEST, CHAT_ROOMS_SUCCESS, FAILURE],
    },
  };
}

export function login(name) {
  return {
    type: SET_USER_NAME,
    payload: name,
  };
}

export function onPushNotification(msg) {
  return {
    type: SET_PUSH_NOTIFICATION,
    payload: msg,
  };
}
