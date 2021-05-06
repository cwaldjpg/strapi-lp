import { makeStyles, Theme } from '@material-ui/core/styles';
import { styleInterface } from 'utils/types';

const useStyles = makeStyles((theme: Theme) => ({
  title: (props: styleInterface) => ({
    fontSize: '40px',
    fontWeight: 'bold',
    margin: '40px auto 120px',
    padding: '0 40px',
    textAlign: 'center',
    color: props.color,
    [theme.breakpoints.down('sm')]: {
      margin: '40px auto',
    },
  }),
  mainContent: (props: styleInterface) => ({
    margin: '40px auto 45px auto',
    maxWidth: '1051px',
    width: '100%',
    backgroundColor: props.backgroundColor || theme.palette.contrast.main,
    backgroundImage: props.backgroundImage,
    color: props.color,
  }),
  contentImage: {
    margin: '0 80px',
    '& img': {
      marginTop: '-80px',
      width: '100%',
      objectFit: 'contain',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0',
      '& img': {
        margin: '0',
      },
    },
  },
  contentDescription: {
    padding: '40px 0',
  },
  contentItem: {
    margin: 'auto',
    maxWidth: '417px',
    textAlign: 'center',
    borderBottom: '1px solid rgb(208, 208, 208)',
    padding: '16px 0',
    fontSize: '14px',
    '&:first-child': {
      paddingTop: '0',
    },
    '&:last-child': {
      borderBottom: 'none',
      paddingBottom: '0',
    },
    '& div:first-child': {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
  },
}));

export default useStyles;
