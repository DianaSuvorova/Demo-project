import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  on: {
    color: 'yellow',
  },
};

const ReactionIcon = ({ toggled, onClick }) => (
  <div onClick={onClick}>
    <i style={(toggled) ? styles.on : {}} className="material-icons">face</i>
  </div>
);

ReactionIcon.propTypes = {
  toggled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ReactionIcon;
