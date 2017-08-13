import { connect } from 'react-redux';

import { login } from '../store/userState/actions';
import Login from '../components/Login';

const mapDispatchToProps = dispatch => (
  {
    onSubmit: name => dispatch(login(name)),
  }
);

export default connect(null, mapDispatchToProps)(Login);
