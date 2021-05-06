import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    margin: '40px 0',
    padding: '0 40px',
    textAlign: 'center',
  },
  description: {
    margin: '40px auto',
    padding: '0 40px',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    textAlign: 'center',
    maxWidth: '1051px',
    fontSize: '14px',
    lineHeight: '30px',
  },
  content: {
    backgroundColor: theme.palette.contrast.main,
    margin: '40px auto 80px',
    maxWidth: '1051px',
    padding: '40px',
    fontSize: '14px',
    lineHeight: '1.7',
    '& h2, h3, h4': {
      margin: '16px 0',
      fontSize: '20px',
      '&:first-child': {
        marginTop: '0',
      },
      '&:last-child': {
        marginBottom: '0',
      },
    },
    '& p': {
      fontSize: '14px',
      '& strong': {
        margin: '16px 0',
      },
    },
    '& ul': {
      margin: '0',
    },
    '& li::marker': {
      fontSize: '8px',
    },
  },
}));

export default useStyles;
