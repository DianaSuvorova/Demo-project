import { observableFromStore } from 'redux-rx';
import { getRooms } from './userState/actions';
import { getRoom } from './roomState/actions';

export default function observeStore(store) {
  const stateStream = observableFromStore(store);

  stateStream
    .distinctUntilChanged(state => state.roomState.isMessageListStale)
    .filter(state => state.roomState.isMessageListStale)
    .subscribe((state) => {
      store.dispatch(getRoom(state.roomState.id));
    });

  stateStream
  .distinctUntilChanged(state => state.userState.isChatListStale)
  .filter(state => state.userState.isChatListStale)
  .subscribe(() => {
    store.dispatch(getRooms());
  });

  return store;
}
