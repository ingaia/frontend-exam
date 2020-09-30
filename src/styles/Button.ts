import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: (props: any) => ({
    color: 'var(--hillary)',
    backgroundColor: 'transparent',
    border: props.noBorders ? 'unset' : '1px solid var(--hillary)',
    borderRadius: 0,
    marginTop: '30px'
  })
}));
