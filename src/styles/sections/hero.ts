import { makeStyles, Theme } from '@material-ui/core/styles';
import { styleInterface } from 'utils/types';

const useStyles = makeStyles((theme: Theme) => ({
  bannerSection: (props: styleInterface) => ({
    maxWidth: '1440px',
    margin: 'auto',
    height: '40vw',
    maxHeight: '560px',
    minHeight: '250px',
    backgroundPosition: 'right',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: props.backgroundColor,
    backgroundImage: props.backgroundImage,
    color: props.color,
    [theme.breakpoints.down('sm')]: {
      minHeight: '400px',
      maxHeight: '560px',
      height: '100vw',
      alignItems: 'flex-start',
      backgroundImage: props.mobileBackgroundImage || props.backgroundImage,
    },
  }),
  bannerTitle: {
    fontSize: '40px',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    paddingRight: '63%',
    [theme.breakpoints.down('md')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: '45%',
      paddingTop: '49%',
      '& div:last-child': {
        marginTop: '16px',
      },
    },
  },
  bannerText: {
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  },
  appLinks: {
    marginTop: '24px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '16px',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  },
  appLinksContent: {
    '&:first-child': {
      marginRight: '8px',
      [theme.breakpoints.down('sm')]: {
        margin: '0px',
      },
    },
  },
  descriptionSection: (props: styleInterface) => ({
    margin: '40px 16px 80px 16px',
    fontSize: '14px',
    textAlign: 'center',
    lineHeight: '30px',
    backgroundColor: props.backgroundColor,
    color: props.color,
    '& div': {
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
    },
  }),
  bannerSubTitle: {
    fontSize: '20px',
    marginBottom: '24px',
    fontWeight: 'bold',
  },
  bannerDescription: {
    fontSize: '14px',
  },
}));

export default useStyles;
