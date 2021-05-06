import { makeStyles, Theme } from '@material-ui/core/styles';
import { styleInterface } from 'utils/types';

const useStyles = makeStyles((theme: Theme) => ({
  invitationSection: (props: styleInterface) => ({
    margin: 'auto',
    paddingTop: '40px',
    paddingBottom: '64px',
    maxWidth: '1440px',
    display: 'grid',
    background: `linear-gradient(
      to right,
      ${theme.palette.secondary.main},
      ${theme.palette.secondary.main} 41%,
      ${props.backgroundColor || theme.palette.contrast.main} 41%
    )`,
    backgroundImage: props.backgroundImage,
    color: props.color,
    gridTemplateColumns: 'minmax(250px, 887px) minmax(275px, 390px)',
    gridTemplateRows: '40px minmax(437px, max-content)',
    gridGap: '40px 48px',
    gridAutoFlow: 'column',
    [theme.breakpoints.down('md')]: {
      gridGap: '20px 24px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      background: 'none',
      backgroundColor: props.backgroundColor || theme.palette.contrast.main,
      backgroundImage: props.backgroundImage,
      padding: '24px 16px 40px 16px',
      flexDirection: 'column',
      '& br': {
        display: 'none',
      },
    },
  }),
  invitationAligner: {
    position: 'absolute',
    left: 'calc(50% - 20px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& img': {
      position: 'relative',
      bottom: '80px',
    },
    [theme.breakpoints.down('sm')]: {
      '& img': {
        position: 'relative',
        bottom: '48px',
        '&:first-child': {
          height: '48px',
        },
      },
    },
  },
  invitationBanner: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      marginTop: '64px',
    },
  },
  invitationTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    paddingRight: '20px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '32px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
      justifyContent: 'center',
      margin: '12px 0px 4px',
    },
  },
  invitationDescription: {
    fontSize: '14px',
    lineHeight: '30px',
    paddingRight: '20px',
    '& p': {
      margin: 0,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '13px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: '0px',
    },
  },
}));

export default useStyles;
