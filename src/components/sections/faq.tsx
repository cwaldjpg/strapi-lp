import React from 'react';
import { Collapse } from '@material-ui/core';
import _ from 'lodash';

import useStyles from '@styles/sections/faq';
interface FaqProps {
  data: {
    title: string;
    questionList: {
      id: string | number;
      question: string;
      answer: string;
    }[];
  };
}

const FaqSection: React.FC<FaqProps> = ({ data }: FaqProps) => {
  const { questionList = [], title } = data;
  const [checked, setChecked] = React.useState<Array<string | number>>([]);
  const handleChecked = (id: string | number) => {
    if (checked.includes(id)) {
      setChecked((checked: Array<string | number>) => _.filter(checked, (n) => n !== id));
    } else {
      setChecked((checked: Array<string | number>) => [...checked, id]);
    }
  };
  const classes = useStyles();
  return (
    <div>
      <div className={classes.title}>{title}</div>
      <div className={classes.faqList}>
        {questionList.map(({ id, question, answer }, index) => (
          <div key={id} className={classes.faqContainer}>
            <div
              className={`${classes.questionContainer} ${
                checked.includes(id) && classes.activeQuestionContainer
              }`}
              onClick={() => handleChecked(id)}
            >
              <div className={classes.questionTitle}>
                <div className={classes.questionIcon}>{`Q${index + 1}`}</div>
                {question}
              </div>
            </div>
            <Collapse in={checked.includes(id)}>
              <div
                className={classes.answerContainer}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
