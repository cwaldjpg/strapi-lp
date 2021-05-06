import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    display: 'block',
    marginBottom: '8px',
    '& .required': {
      color: theme.palette.contactTextError.main,
      marginLeft: '6px',
    },
  },
  input: {
    marginBottom: '24px',
    height: '48px',
    width: '100%',
    padding: '17px 16px',
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.tetriary.main}`,
    borderRadius: '10px',
    boxShadow: 'none',
  },
  textarea: {
    marginBottom: '32px',
    height: '98px',
    width: '100%',
    padding: '17px 16px',
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.tetriary.main}`,
    borderRadius: '10px',
    boxShadow: 'none',
    resize: 'none',
  },
  selectField: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      top: '1.125em',
      right: '1.125rem',
      height: '24px',
      width: '24px',
      backgroundImage: 'url(/down-arrow.png)',
      backgroundSize: '24px 24px',
      content: 'url(/)',
      pointerEvents: 'none',
    },
    '&:visited, &:focus, &:active': {
      outline: 'none',
    },
    '& select': {
      marginBottom: '24px',
      width: '100%',
      padding: '17px 16px',
      boxSizing: 'border-box',
      backgroundColor: '#ffffff',
      border: `1px solid ${theme.palette.tetriary.main}`,
      borderRadius: '10px',
      boxShadow: 'none',
      height: 'auto',
      appearance: 'none',
      '&:visited, &:focus, &:active': {
        outline: 'none',
      },
      '&:invalid': {
        color: 'rgba(175, 175, 175, 1)',
      },
      '&[disabled="true"]': {
        opacity: 1,
        color: theme.palette.tetriary.main,
      },
    },
  },
  errorField: {
    border: `1px solid ${theme.palette.contactTextError.main}`,
  },
  selectError: {
    '& select': {
      border: `1px solid ${theme.palette.contactTextError.main}`,
    },
  },
}));

export default useStyles;
