import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import videos from './videos/sagas';

export default function* rootSaga() {
    return yield all([auth, videos]);
}
