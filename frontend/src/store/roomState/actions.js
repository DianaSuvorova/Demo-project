import { CALL_API } from 'redux-api-middleware';
import { REQUEST, ROOM_DETAILS_SUCCESS, FAILURE, ROOM_MESSAGES_SUCCESS, SEND_MESSAGE_SUCCESS, UPDATE_MESSAGE_SUCCESS } from '../constants';
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

export function updateMessage(roomId, messageId, reaction) {
  const data = {
    reaction,
  };
  return {
    [CALL_API]: {
      endpoint: `${apiBase}/rooms/${roomId}/messages/${messageId}`,
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
      types: [
        {
          type: REQUEST,
          payload: () => ({ messageId }),
        },
        UPDATE_MESSAGE_SUCCESS,
        FAILURE,
      ],
    },
  };
}
