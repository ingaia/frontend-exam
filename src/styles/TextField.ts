import { makeStyles } from '@material-ui/core/styles';

export const inputStyles = makeStyles(() => ({
  input: {
    color: 'var(--white)'
  },
  underline: {
    borderBottomColor: 'var(--hillary) !important',
    '&:before, &:after': {
      borderBottomColor: 'var(--hillary) !important',
    },
    '&:hover': {
      '&:before': {
        borderBottomColor: 'var(--hillary) !important',
      }
    }
  }
}));

export const labelStyles = makeStyles(() => ({
  root: {
    color: 'var(--hillary)'
  },
  focused: {
    color: 'var(--hillary) !important'
  }
}));
