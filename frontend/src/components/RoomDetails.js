import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ReactionIcon from './ReactionIcon';


const { palette } = getMuiTheme();

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    flex: '0 0 75px',
    width: '100%',
    height: '100',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: palette.clockCircleColor,
  },
  messages: {
    flex: '3 0 150px',
    overflowY: 'scroll',
  },
  footer: {
    flex: '0 0 75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: '0 0 auto',
    margin: '0 12px',
  },
  text: {
    flex: '4 1 auto',
    margin: '0 12px',
  },
};

class RoomDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  onInputMessage(value) {
    this.setState({ message: value });
  }

  onClickSend() {
    const { userName, roomId } = this.props;
    this.setState({ message: '' });
    this.props.onSendMessage(userName, roomId, this.state.message);
  }

  onToggleReaction(messageId, reaction) {
    this.props.onUpdateMessage(this.props.roomId, messageId, reaction);
  }

  render() {
    const { roomName, messages } = this.props;
    const messagesEl = messages.map(msg =>
      <ListItem
        key={msg.id}
        primaryText={msg.message}
        rightIcon={
          <ReactionIcon
            toggled={msg.reaction}
            onClick={() => this.onToggleReaction(msg.id, !msg.reaction)}
          />
        }
      />
    );
    return (
      <div style={styles.container}>
        <Paper style={styles.header}>{roomName}</Paper>
        <div style={styles.messages}>
          <List>{messagesEl}</List>
        </div>
        <Paper style={styles.footer}>
          <TextField
            id="msg"
            style={styles.text}
            hintText="Type a message.."
            onChange={(e, value) => { this.onInputMessage(value); }}
            value={this.state.message}
          />
          <FlatButton
            label="Send"
            primary
            style={styles.button}
            onClick={() => this.onClickSend()}
          />
        </Paper>
      </div>
    );
  }
}

RoomDetails.propTypes = {
  userName: PropTypes.string,
  roomId: PropTypes.number,
  roomName: PropTypes.string,
  messages: PropTypes.array,
  onSendMessage: PropTypes.func.isRequired,
  onUpdateMessage: PropTypes.func.isRequired,
};

export default RoomDetails;
