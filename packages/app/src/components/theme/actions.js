export const setTheme = theme => ({
  type: 'SET_THEME',
  payload: theme,
});

export const setDecorate = decorate => ({
  type: 'SET_DECORATE',
  payload: decorate,
});

export default { setTheme, setDecorate };
