import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  supportedContainer: {
    backgroundColor: '#ffffff',
    padding: '80px 0 100px',
    textAlign: 'center',
    margin: '120px 135px 221px',
    [theme.breakpoints.down('sm')]: {
      margin: '120px 0 221px',
    },
  },
  title: {
    fontSize: '40px',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: '14px',
    lineHeight: '30px',
    margin: '40px 0',
  },
  supportedBrowsers: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  browserLink: {
    padding: '24px 48px 16px',
    border: '1px solid rgb(227,227,227)',
    borderRadius: '4px',
    margin: '12px',
  },
  browserLogo: {
    width: '80px',
    height: '80px',
  },
  browserName: {
    fontSize: '12px',
    margin: '8px 0 16px',
  },
}));

export default useStyles;
