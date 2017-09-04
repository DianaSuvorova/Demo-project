import { observableFromStore } from 'redux-rx';
import { getRoom } from './roomState/actions';

export default function observeStore(store) {
  const stateStream = observableFromStore(store);

  stateStream
    .distinctUntilChanged(state => state.roomState.isMessageListStale)
    .filter(state => state.roomState.isMessageListStale)
    .subscribe((state) => {
      store.dispatch(getRoom(state.roomState.id));
    });

  return store;
}
