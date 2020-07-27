import ConnectedTheme from './theme';
import reducer from './reducer';
import actions from './actions';

export const Theme = ConnectedTheme;
export const themeReducer = reducer;
export const setTheme = actions.setTheme;
export const setDecorate = actions.setDecorate;

export default {
  Theme,
  reducer,
  setTheme,
  setDecorate,
};
