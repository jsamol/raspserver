import { connect } from 'react-redux';
import Login from '../../components/auth/Login';
import { toggleAuthorization, addToken } from "../../actions/auth";
import { storeToken } from "../../utils/auth/TokenHandler"

const mapStateToProps = state => {
  return ({
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
      storeToken(token);
    }
  });
};

export default connect (mapStateToProps, mapDispatchToProps)(Login);