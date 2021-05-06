import { makeStyles, Theme } from '@material-ui/core/styles';
import { styleInterface } from 'utils/types';

const useStyles = makeStyles((theme: Theme) => ({
  layoutContainer: (props?: styleInterface) => ({
    backgroundColor: props?.backgroundColor || theme.palette.secondary.main,
    minHeight: '67vh',
    height: '100%',
    paddingBottom: '45px',
  }),
  layoutHeader: {
    paddingTop: '45px',
    paddingLeft: '135px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '16px',
      paddingLeft: '16px',
      '& img': {
        width: '40px',
        height: '40px',
        objectFit: 'cover',
      },
    },
  },
  layoutFooter: {
    backgroundColor: theme.palette.contrast.main,
    padding: '80px 128px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '32px 0',
    },
  },
  footerAppLink: {
    marginTop: '24px',
    '& .app-links-content:first-child': {
      marginRight: '8px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      '& .app-links-content:first-child': {
        marginRight: '0',
      },
    },
  },
  layoutFooterNav: {
    backgroundColor: theme.palette.primary.main,
    fontSize: '12px',
    padding: '12px 0px',
    '& div': {
      display: 'flex',
      justifyContent: 'center',
      '& div': {
        marginRight: '48px',
        color: theme.palette.tetriary.main,
      },
      '& a': {
        color: theme.palette.secondary.main,
      },
      '& a:last-child': {
        '& div': {
          margin: '0',
        },
      },
    },
    [theme.breakpoints.down('sm')]: {
      padding: '40px 20px',
      '& div': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& div': {
          margin: '0 0 24px 0 !important',
        },
      },
    },
  },
}));

export default useStyles;
