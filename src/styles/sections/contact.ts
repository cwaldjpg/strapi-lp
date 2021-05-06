import { makeStyles, Theme } from '@material-ui/core/styles';
import { styleInterface } from 'utils/types';

const useStyles = makeStyles((theme: Theme) => ({
  contactSection: (props?: styleInterface) => ({
    margin: 'auto',
    marginTop: '40px',
    marginBottom: '80px',
    maxWidth: '1170px',
    width: '100%',
    padding: '64px 0px',
    background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${
      theme.palette.secondary.main
    } 8.5%,${props?.backgroundColor || theme.palette.contrast.main} 8.5%)`,
    backgroundImage: props?.backgroundImage,
    display: 'grid',
    gridTemplateColumns: 'minmax(200px, 480px) minmax(400px , 690px)',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      background: 'none',
      backgroundColor: props?.backgroundColor || theme.palette.contrast.main,
      backgroundImage: props?.backgroundImage,
      padding: '0',
    },
  }),
  contactImage: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      width: '100%',
      objectFit: 'contain',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  contactForm: (props?: styleInterface) => ({
    fontSize: '14px',
    padding: '0px 120px',
    color: props?.color || theme.palette.contactTextColor.main,
    [theme.breakpoints.down('md')]: {
      padding: '0px 60px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '64px 32px',
    },
  }),
  formTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '32px',
  },
  buttonContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  buttonRoot: {
    maxWidth: '160px',
    width: '100%',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '32px',
    height: '48px',
    '&:last-child': {
      marginLeft: '16px',
    },
  },
  buttonGroup: {
    padding: '0px 52px',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '0px 16px',
    },
  },
  submitSuccess: {
    width: '100%',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.hyperlink.main,
    fontWeight: 'bold',
    '& img': {
      marginRight: '4px',
    },
  },
}));

export default useStyles;
