import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    margin: 12,
  },
  text: {
    margin: 12,
  },
};


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
    };
  }

  onInputName(value) {
    this.setState({ userName: value });
  }

  onClickSubmit() {
    this.props.onSubmit(this.state.userName);
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.form}>
          <TextField
            id="name"
            style={styles.text}
            hintText="Type your username..."
            onChange={(e, value) => { this.onInputName(value); }}
          />
          <RaisedButton
            label="Join the DoorDash chat!"
            primary
            style={styles.button}
            onClick={() => this.onClickSubmit()}
          />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
