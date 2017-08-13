import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const { palette } = getMuiTheme();

const styles = {
  background: palette.primary1Color,
  color: palette.canvasColor,
  margin: 20,
};

const UserInfo = ({ userName }) =>
   (<div style={styles}>{userName}</div>)
;

UserInfo.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default UserInfo;
