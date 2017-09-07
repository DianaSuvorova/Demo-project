import { onPushNotification } from './userState/actions';

export default function subscribeToUpdates(store) {
  const socket = new WebSocket('ws://localhost:8080/api/echo');
  socket.onmessage = event => store.dispatch(onPushNotification(event.data));
}
