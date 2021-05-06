import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    margin: '40px 0',
    fontSize: '40px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  faqList: {
    margin: '68px auto 35px',
    maxWidth: '1170px',
  },
  faqContainer: {
    backgroundColor: theme.palette.contrast.main,
    padding: '20px 24px',
    marginTop: '16px',
    '&:first-child': {
      marginTop: '0',
    },
  },
  questionContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    '&:after': {
      transition: 'transform 0.3s linear',
      content: 'url("/down-arrow.png")',
    },
  },
  activeQuestionContainer: {
    '&:after': {
      transform: 'rotate(180deg)',
    },
  },
  questionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  questionIcon: {
    backgroundImage: 'url("/faq-question-icon.svg")',
    width: '40px',
    minWidth: '40px',
    height: '40px',
    float: 'left',
    display: 'flex',
    justifyContent: 'center',
    lineHeight: '1',
    alignItems: 'center',
    fontSize: '12px',
    marginRight: '16px',
  },
  answerContainer: {
    padding: '18px 0 12px 56px',
    fontSize: '14px',
    lineHeight: '1.7',
  },
}));

export default useStyles;
