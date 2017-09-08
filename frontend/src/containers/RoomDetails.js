import { connect } from 'react-redux';
import RoomDetails from '../components/RoomDetails';
import { sendMessage, updateMessage } from '../store/roomState/actions';


const mapStateToProps = store => ({
  userName: store.userState.name,
  roomId: store.roomState.id,
  roomName: store.roomState.name,
  messages: store.roomState.messages,
});

const mapDispatchToProps = dispatch => (
  {
    onSendMessage: (name, roomId, text) => dispatch(sendMessage(name, roomId, text)),
    onUpdateMessage: (roomId, messageId, reaction) => dispatch(
      updateMessage(roomId, messageId, reaction)
    ),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RoomDetails);
