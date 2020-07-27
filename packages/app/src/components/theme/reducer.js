const initialState = {
  theme: 'dark',
  decorate: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    case 'SET_DECORATE':
      return {
        ...state,
        decorate: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
