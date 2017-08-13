import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

const { palette } = getMuiTheme();

const styles = {
  header: {
    width: '100%',
    height: '100',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: palette.clockCircleColor,
  },
};


const RoomDetails = ({ name, messages }) => {
  const messagesEl = messages.map(msg =>
    <ListItem key={msg.id} primaryText={msg.message} />
  );
  return (
    <div>
      <Paper style={styles.header}>{name}</Paper>
      <List>{messagesEl}</List>
    </div>
  );
};

RoomDetails.propTypes = {
  name: PropTypes.string,
  messages: PropTypes.array,
};

export default RoomDetails;
