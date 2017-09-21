import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => {
  return({
    isAuthorized: state.authorization
  });
};

export default connect(mapStateToProps)(App);