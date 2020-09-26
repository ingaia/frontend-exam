// Tools
import { combineReducers } from 'redux';

// Reducers
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
