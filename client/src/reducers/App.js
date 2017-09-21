import { combineReducers } from 'redux';
import { authorization, token} from "./Auth";

const app = combineReducers({
  authorization,
  token
});

export default app;
