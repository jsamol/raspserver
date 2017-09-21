import { connect } from 'react-redux';
import Login from '../../components/auth/Login';
import { toggleAuthorization, addToken } from "../../actions/auth";

const mapStateToProps = state => {
  return ({
    isAuthorized: state.authorization
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    toggleAuthorization: () => {
      dispatch(toggleAuthorization())
    },
    addToken: token => {
      dispatch(addToken(token))
    }
  });
};

export default connect (mapStateToProps, mapDispatchToProps)(Login);