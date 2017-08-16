import { connect } from 'react-redux';
import RoomDetails from '../components/RoomDetails';
import { sendMessage } from '../store/roomState/actions';


const mapStateToProps = store => ({
  userName: store.userState.name,
  roomId: store.roomState.id,
  roomName: store.roomState.name,
  messages: store.roomState.messages,
});

const mapDispatchToProps = dispatch => (
  {
    onSendMessage: (name, roomId, text) => dispatch(sendMessage(name, roomId, text)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RoomDetails);
