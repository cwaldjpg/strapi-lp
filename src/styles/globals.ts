import { Theme, createStyles } from '@material-ui/core/styles';

const globalStyles = (theme: Theme) =>
  createStyles({
    '@global': {
      body: {
        margin: '0px',
        fontFamily: '"Noto Sans JP", sans-serif',
        color: 'rgb(38, 38, 38)',
      },
      a: {
        color: 'rgb(87, 187, 191)',
        textDecoration: 'none',
      },
      p: {
        padding: '0',
        margin: '0',
      },
      '::placeholder': {
        color: 'rgba(175, 175, 175, 1)',
        opacity: '1',
      },
    },
  });

export default globalStyles;
