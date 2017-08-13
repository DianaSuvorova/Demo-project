import { connect } from 'react-redux';
import Chat from '../components/Chat';
import { getRoom } from '../store/roomState/actions';


const mapStateToProps = store => ({
  userName: store.userState.name,
  rooms: store.userState.rooms,
});

const mapDispatchToProps = dispatch => (
  {
    getRoom: name => dispatch(getRoom(name)),
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Chat);
