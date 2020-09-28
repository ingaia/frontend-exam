import { makeStyles } from '@material-ui/core/styles';

export const inputStyles = makeStyles(() => ({
  input: {
    color: 'var(--white)'
  },
  underline: {
    borderBottomColor: 'var(--hillary)',
    '&:before, &:after': {
      borderBottomColor: 'var(--hillary)',
      '&:hover': {
        borderBottomColor: 'red',
      }
    },
    '&:hover': {
      borderBottomColor: 'red',
      '&:before': {
        borderBottomColor: 'red',
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
