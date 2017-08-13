import { SET_ROOM_DETAILS, SET_ROOM_MESSAGES } from '../constants';

export default function roomState(state = {
  name: null,
  id: null,
  messages: [],
}, action) {
  const newState = { ...state };
  switch (action.type) {
    case SET_ROOM_DETAILS: {
      newState.name = action.payload.name;
      newState.id = action.payload.id;
      newState.users = action.payload.users;
      return newState;
    }
    case SET_ROOM_MESSAGES : {
      newState.messages = action.payload;
      return newState;
    }
    default:
      return state;
  }
}
