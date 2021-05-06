import React from 'react';

import Image from '@components/elements/image';
import { backgroundColorInterface, mediaInterface, textColorInterface } from 'utils/types';
import { getBackground } from 'utils/background';
import { getTextColor } from 'utils/color';
import useStyles from '@styles/sections/company';

interface CompanyProps {
  data: {
    title: string;
    image: mediaInterface;
    companyInfo: {
      id: string | number;
      label: string;
      content: string;
    }[];
    backgroundColor: backgroundColorInterface;
    textColor: textColorInterface;
  };
}

const CompanySection: React.FC<CompanyProps> = ({ data }: CompanyProps) => {
  const classes = useStyles({
    ...getBackground(data.backgroundColor),
    ...getTextColor(data.textColor),
  });
  const { title, image, companyInfo } = data;
  return (
    <div>
      <div className={classes.title}>{title}</div>
      <div className={classes.mainContent}>
        <div className={classes.contentImage}>{data.image?.url && <Image media={image} />}</div>
        <div className={classes.contentDescription}>
          {companyInfo.map((item) => (
            <div key={item.id} className={classes.contentItem}>
              <div>{item.label}</div>
              <div>{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
