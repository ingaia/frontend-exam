import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'var(--black)',
    border: '1px solid var(--hillary)',
    overflow: 'hidden',
    '& iframe': {
      border: 'unset',
      [theme.breakpoints.down('xs')]: {
        height: 'auto'
      },
    }
  }
}));
