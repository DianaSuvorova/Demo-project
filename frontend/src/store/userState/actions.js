import request from 'request-promise';
import { SET_USER_NAME, SET_CHAT_ROOMS } from '../constants';

const apiBase = 'http://localhost:8080/api';

export function setRooms(rooms) {
  return {
    type: SET_CHAT_ROOMS,
    payload: rooms,
  };
}

export function setUserName(name) {
  return {
    type: SET_USER_NAME,
    payload: name,
  };
}

export function getRooms() {
  return (dispatch) => {
    const roomsUri = '/rooms';
    const options = {
      uri: `${apiBase}${roomsUri}`,
      method: 'GET',
    };
    return request(options).then((response) => {
      dispatch(setRooms(JSON.parse(response)));
    });
  };
}

export function login(name) {
  return (dispatch) => {
    dispatch(setUserName(name));
    dispatch(getRooms());
  };
}
