import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import UserInfo from './UserInfo';
import Rooms from './Rooms';
import RoomDetails from '../containers/RoomDetails';

const { palette } = getMuiTheme();

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  leftPanel: {
    flex: '2 0',
    background: palette.primary1Color,
  },
  rightPanel: {
    flex: '8 0',
  },

};

class Chat extends React.Component {
  constructor(props) {
    super(props);
    const firstRoom = props.rooms[0];
    this.state = {
      activeRoomID: firstRoom && firstRoom.id,
    };
  }

  componentWillReceiveProps(nextProps) {
    const firstRoom = nextProps.rooms[0];
    if (firstRoom.id !== this.state.activeRoomID) {
      this.setActiveRoom(firstRoom.id);
    }
  }

  setActiveRoom(id) {
    this.props.getRoom(id);
    this.setState({ activeRoomID: id });
  }

  render() {
    const { userName, rooms } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.leftPanel}>
          <UserInfo userName={userName} />
          <Rooms
            items={rooms}
            activeRoomID={this.state.activeRoomID}
            changeRoom={id => this.setActiveRoom(id)}
          />
        </div>
        <div style={styles.rightPanel}>
          <RoomDetails />
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  userName: PropTypes.string.isRequired,
  rooms: PropTypes.array.isRequired,
  getRoom: PropTypes.func.isRequired,
};

export default Chat;
