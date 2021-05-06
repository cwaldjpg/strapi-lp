import { makeStyles, Theme } from '@material-ui/core/styles';
import { styleInterface } from 'utils/types';

const useStyles = makeStyles((theme: Theme) => ({
  tutorialSection: (props: styleInterface) => ({
    maxWidth: '1440px',
    margin: 'auto',
    paddingBottom: '35px',
    backgroundColor: props.backgroundColor,
    backgroundImage: props.backgroundImage,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '0 ',
      backgroundColor: props.mobileBackgroundColor,
      backgroundImage: props.mobileBackgroundImage,
    },
  }),
  tutorialTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '80px 0 56px',
  },
  tutorialStep: {
    display: 'grid',
    gridTemplateColumns: 'minmax(288px, 708px) minmax(288px, 708px)',
    gridColumnGap: '24px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '64px',
    },
  },
  contentSide: {
    paddingTop: '207px',
    gridColumn: '2',
    '& .step-content': {
      marginLeft: '50px',
      '& .step-logo': {
        width: '80px',
        height: '80px',
        objectFit: 'cover',
        marginBottom: '24px',
      },
      '& .step-title': {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '16px',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      },
      '& .step-description': {
        fontSize: '14px',
        marginBottom: '16px',
        maxWidth: '460px',
        paddingRight: '24px',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        lineHeight: '2.2',
      },
    },
    '& .step-arrow': {
      width: '100px',
      height: '34px',
      objectFit: 'cover',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .step-content': {
        textAlign: 'center',
        marginLeft: '0',
        '& .step-logo': {
          marginBottom: '16px',
        },
        '& .step-description': {
          maxWidth: '295px !important',
          paddingRight: '0 !important',
        },
      },
      '& .step-arrow': {
        display: 'none',
      },
    },
  },
  contentSideReverse: {
    gridColumn: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingLeft: '24px',
    '& .step-content': {
      marginLeft: '0',
      marginRight: '50px',
      '& .step-description': {
        paddingRight: '0',
      },
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0',
      paddingLeft: '0',
      alignItems: 'center',
      '& .step-content': {
        marginRight: '0',
      },
    },
  },
  phoneSide: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '100px',
    minHeight: '481px',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url("/Black-Left.svg")',
    backgroundPosition: 'top right 120px',
    gridColumn: '1',
    gridRow: '1',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      paddingTop: '24px',
      backgroundPosition: 'top right 50vw',
    },
  },
  phoneSideReverse: {
    justifyContent: 'flex-start',
    backgroundImage: 'url("/Black-Right.svg")',
    backgroundPosition: 'top left 120px',
    gridColumn: 2,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      paddingTop: '24px',
      backgroundPosition: 'top left 50vw',
    },
  },
  tabBarRoot: {
    margin: '56px 0 72px',
  },
  tabBarSroller: {
    display: 'flex',
    justifyContent: 'center',
    maxHeight: '46px',
  },
  tabBarContainer: {
    padding: '4px',
    backgroundColor: theme.palette.tetriary.main,
    alignSelf: 'center',
  },
  tabBarIndicator: {
    height: '38px',
    top: '4px',
    backgroundColor: theme.palette.primary.main,
  },
  tabButtonRoot: {
    fontSize: '18px',
    minHeight: '46px',
    width: '164px',
    zIndex: 1,
  },
  tabButtonSelected: {
    color: theme.palette.contrast.main,
  },
}));

export default useStyles;
