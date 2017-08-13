import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = store => ({
  userName: store.userState.name,
});

export default connect(mapStateToProps, null)(App);
