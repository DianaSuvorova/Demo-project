import { connect } from 'react-redux';
import RoomDetails from '../components/RoomDetails';


const mapStateToProps = store => ({
  name: store.roomState.name,
  messages: store.roomState.messages,
});


export default connect(mapStateToProps, null)(RoomDetails);
