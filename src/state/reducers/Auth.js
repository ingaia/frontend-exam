import { SET_AUTH } from 'state/actions/types'

/* */

export const AuthReducer = (state = null, action) => {

    switch(action.type){

        case SET_AUTH :

            console.log(action.data)

            state = action.data

            return state

        break

        default : return state

    }

}
