import ModalActionTypes from './modal.types';

const INITIAL_STATE = {
  visible: false,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionTypes.TOGGLE_MODAL:
      return {
        ...state,
        visible: !state.visible,
      };
    default:
      return state;
  }
};

export default modalReducer;
