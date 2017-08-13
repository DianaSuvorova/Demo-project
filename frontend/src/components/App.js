import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from '../containers/Login';
import Chat from '../containers/Chat';


const App = ({ userName }) => {
  const content = (!userName) ? <Login /> : <Chat />;
  return (
    <MuiThemeProvider>
      {content}
    </MuiThemeProvider>
  );
};

App.propTypes = {
  userName: PropTypes.string,
};

export default App;
