import { SET_USER_NAME, CHAT_ROOMS_SUCCESS } from '../constants';

export default function userState(state = {
  name: null,
  rooms: [],
  isChatListStale: false,
}, action) {
  const newState = { ...state };
  switch (action.type) {
    case SET_USER_NAME: {
      newState.name = action.payload;
      newState.isChatListStale = true;
      return newState;
    }
    case CHAT_ROOMS_SUCCESS : {
      newState.rooms = action.payload;
      newState.isChatListStale = false;
      return newState;
    }
    default:
      return state;
  }
}
