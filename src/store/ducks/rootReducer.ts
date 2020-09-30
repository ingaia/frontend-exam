import { combineReducers } from 'redux';

import auth from './auth';
import playlist from './playlist';

export default combineReducers({
  auth,
  playlist
});
