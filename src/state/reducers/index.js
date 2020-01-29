import { combineReducers } from 'redux'

/* */

import { AuthReducer } from './Auth'

/* */

export const Reducers = combineReducers({

    auth : AuthReducer

})
