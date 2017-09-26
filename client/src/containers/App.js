import { connect } from 'react-redux';
import App from '../components/App';
import {addToken, toggleAuthorization} from "../actions/auth";

const mapStateToProps = state => {
  return({
    isAuthorized: state.authorization
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    toggleAuthorization: () => {
      dispatch(toggleAuthorization());
    },
    addToken: token => {
      dispatch(addToken(token));
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);