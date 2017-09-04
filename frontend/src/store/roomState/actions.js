import request from 'request-promise';
import { CALL_API } from 'redux-api-middleware';
import { REQUEST, ROOM_DETAILS_SUCCESS, FAILURE, ROOM_MESSAGES_SUCCESS, SEND_MESSAGE_SUCCESS } from '../constants';
import { apiBase } from '../../helpers';

export function getRoomDeatails(id) {
  return {
    [CALL_API]: {
      endpoint: `${apiBase}/rooms/${id}`,
      method: 'GET',
      types: [REQUEST, ROOM_DETAILS_SUCCESS, FAILURE],
    },
  };
}

export function getRoomMessages(id) {
  return {
    [CALL_API]: {
      endpoint: `${apiBase}/rooms/${id}/messages`,
      method: 'GET',
      types: [REQUEST, ROOM_MESSAGES_SUCCESS, FAILURE],
    },
  };
}

export function getRoom(id) {
  return (dispatch) => {
    dispatch(getRoomDeatails(id));
    dispatch(getRoomMessages(id));
  };
}

export function sendMessage(name, roomId, text) {
  const data = {
    roomId,
    name,
    message: text,
  };
  return {
    [CALL_API]: {
      endpoint: `${apiBase}/rooms/${roomId}/messages`,
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
      types: [REQUEST, SEND_MESSAGE_SUCCESS, FAILURE],
    },
  };
}

export function sendMessage1(name, roomId, text) {
  return (dispatch) => {
    const uri = `/rooms/${roomId}/messages`;
    const data = {
      roomId,
      name,
      message: text,
    };
    const options = {
      uri: `${apiBase}${uri}`,
      method: 'POST',
      body: data,
      json: true,
    };
    return request(options).then(() => {
      dispatch(getRoomMessages(roomId));
    });
  };
}
