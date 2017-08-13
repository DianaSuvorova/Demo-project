import { SET_USER_NAME, SET_CHAT_ROOMS } from '../constants';

export default function userState(state = {
  name: null,
  rooms: [],
}, action) {
  const newState = { ...state };
  switch (action.type) {
    case SET_USER_NAME: {
      newState.name = action.payload;
      return newState;
    }
    case SET_CHAT_ROOMS : {
      newState.rooms = action.payload;
      return newState;
    }
    default:
      return state;
  }
}
