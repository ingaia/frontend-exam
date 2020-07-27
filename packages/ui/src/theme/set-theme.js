const fontFallback = 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';

const setTheme = (dark = true) => ({
  html: {
    fontFamily: `"Roboto Condensed", ${fontFallback}`,
    fontSize: '14px',
    lineHeight: '1.5',
  },
  body: {
    fontColor: dark ? '#fff' : '#1d1a1a',
    bgColor: dark ? '#1d1a1a' : '#fff',
  },
  container: {
    bgColor: dark ? '#040404' : '#fff',
  },
  masthead: {
    borderColor: dark ? '#4c4c4c' : '#a99e7e',
    bgColor: dark ? '#000' : '#fff',
  },
  input: {
    fontColor: dark ? '#fff' : '#1d1a1a',
    borderColor: '#a99e7e',
    focusBorderColor: dark ? '#fff' : '#1d1a1a',
    placeholderColor: '#a99e7e',
  },
  gradient: {
    start: dark ? '#000' : '#fff',
    end: dark ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0)',
  },
  scroll: {
    bgColor: dark ? '#1d1a1a' : '#fff',
    trackColor: '#a99e7e',
  },
  focus: {
    outlineColor: 'rgba(169, 158, 126, .5)',
  },
  button: {
    fontColor: dark ? '#fff' : '#1d1a1a',
    fontColorHover: '#a99e7e',
    bgColor: 'transparent',
    bgColorHover: 'transparent',
    activeFontColor: '#a99e7e',
    activeFontColorHover: '#fff',
    activeBgColor: 'transparent',
    activeBgColorHover: '#a99e7e',
    borderColor: '#a99e7e',
  },
  loader: {
    offColor: dark ? '#4c4c4c' : '#ccc',
    onColor: '#ff3509',
  },
  card: {
    borderColor: '#a99e7e',
    borderColorHover: dark ? '#fff' : '#1d1a1a',
  },
  modal: {
    borderColor: '#a99e7e',
    bgColor: dark ? 'rgba(29, 26, 26, 0.9)' : 'rgba(255, 255, 255, 0.9)',
  },
  assetsPath: dark ? 'assets/dark/' : 'assets/light/',
});

export default setTheme;
