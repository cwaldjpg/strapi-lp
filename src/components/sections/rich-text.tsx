import React from 'react';
import useStyles from '@styles/sections/rich-text';

interface RichTextProps {
  data: {
    title: string;
    description: string;
    content: string;
  };
}

const RichText: React.FC<RichTextProps> = ({ data }: RichTextProps) => {
  const classes = useStyles();

  return (
    <div>
      {/* Title */}
      <div className={classes.title}>{data.title}</div>
      <div className={classes.description}>{data.description}</div>
      {/* Rich text */}
      {data.content && (
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: data.content }} />
      )}
    </div>
  );
};

export default RichText;
