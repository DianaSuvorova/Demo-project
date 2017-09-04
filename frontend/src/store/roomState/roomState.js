import { ROOM_DETAILS_SUCCESS, ROOM_MESSAGES_SUCCESS, SEND_MESSAGE_SUCCESS } from '../constants';

export default function roomState(state = {
  name: null,
  id: null,
  messages: [],
  isMessageListStale: false,
}, action) {
  const newState = { ...state };
  switch (action.type) {
    case ROOM_DETAILS_SUCCESS: {
      newState.name = action.payload.name;
      newState.id = action.payload.id;
      newState.users = action.payload.users;
      return newState;
    }
    case ROOM_MESSAGES_SUCCESS : {
      newState.messages = action.payload;
      newState.isMessageListStale = false;
      return newState;
    }
    case SEND_MESSAGE_SUCCESS : {
      newState.isMessageListStale = true;
      return newState;
    }
    default:
      return state;
  }
}
