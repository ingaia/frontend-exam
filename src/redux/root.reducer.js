// Tools
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import userReducer from './user/user.reducer';
import playlistReducer from './playlist/playlist.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: userReducer,
  playlist: playlistReducer,
});

export default persistReducer(persistConfig, rootReducer);
