import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    margin: '40px 0',
    padding: '0 40px',
    fontSize: '40px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tabBarIndicator: {
    backgroundColor: theme.palette.primary.main,
    height: '5px',
    borderRadius: '2.5px',
    transition: 'none',
  },
  tabButtonRoot: {
    fontSize: '20px',
    width: '200px',
    [theme.breakpoints.down('xs')]: {
      width: '160px',
    },
  },
  tabButtonSelected: {
    fontWeight: 'bold',
  },
  bottomLine: {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    position: 'absolute',
    width: '640px',
    bottom: '2px',
  },
  tabDescription: {
    margin: '40px 0',
    padding: '0 40px',
    textAlign: 'center',
    lineHeight: '33px',
    whiteSpace: 'pre-wrap',
    fontSize: '14px',
  },
  tabContent: {
    maxWidth: '1051px',
    margin: 'auto',
    backgroundColor: 'rgb(255,255,255)',
    padding: '40px',
    marginBottom: '35px',
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
  },
}));

export default useStyles;
