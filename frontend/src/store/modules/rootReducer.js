import { combineReducers } from 'redux';

import auth from './auth/reducer';
import videos from './videos/reducer';

export default combineReducers({
    auth,
    videos,
});
