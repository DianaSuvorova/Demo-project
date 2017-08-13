import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const { palette } = getMuiTheme();

const styles = {
  item: {
    color: palette.canvasColor,
  },
  active: {
    color: palette.canvasColor,
    backgroundColor: palette.canvasColor,
  },
};

const Rooms = ({ activeRoomID, items, changeRoom }) => {
  const itemsEl = items.map(item =>
    <MenuItem
      style={styles.item}
      key={item.id}
      primaryText={item.name}
      checked={activeRoomID === item.id}
      onClick={() => changeRoom(item.id)}
    />
  );
  return <Menu>{itemsEl}</Menu>;
};

Rooms.propTypes = {
  items: PropTypes.array.isRequired,
  activeRoomID: PropTypes.number,
  changeRoom: PropTypes.func.isRequired,
};

export default Rooms;
