import produce from 'immer';

const INITIAL_STATE = {
    signed: false,
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@auth/SIGN_IN_SUCCESS': {
                draft.signed = action.payload.signed;
                break;
            }
            case '@auth/SIGN_OUT': {
                draft.signed = false;
                break;
            }
            default:
        }
    });
}
