import request from 'request-promise';
import { SET_ROOM_DETAILS, SET_ROOM_MESSAGES } from '../constants';

const apiBase = 'http://localhost:8080/api';

export function setRoomMessages(roomMessages) {
  return {
    type: SET_ROOM_MESSAGES,
    payload: roomMessages,
  };
}

export function setRoomDetails(roomDetails) {
  return {
    type: SET_ROOM_DETAILS,
    payload: roomDetails,
  };
}

export function getRoomMessages(id) {
  return (dispatch) => {
    const uri = `/rooms/${id}/messages`;
    const options = {
      uri: `${apiBase}${uri}`,
      method: 'GET',
    };
    return request(options).then((response) => {
      dispatch(setRoomMessages(JSON.parse(response)));
    });
  };
}

export function getRoomDeatails(id) {
  return (dispatch) => {
    const uri = `/rooms/${id}`;
    const options = {
      uri: `${apiBase}${uri}`,
      method: 'GET',
    };
    return request(options).then((response) => {
      dispatch(setRoomDetails(JSON.parse(response)));
    });
  };
}

export function getRoom(id) {
  return (dispatch) => {
    dispatch(getRoomDeatails(id));
    dispatch(getRoomMessages(id));
  };
}
