import { createStore, applyMiddleware, Store } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

import { AuthState } from './ducks/auth/types';
import { PlaylistState } from './ducks/playlist/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  auth: AuthState;
  playlist: PlaylistState;
}

const sagaMiddleware = createSagaMiddleware();

export const typedUseSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
