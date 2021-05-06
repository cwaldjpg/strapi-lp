import React from 'react';

import Image from '@components/elements/image';
import { backgroundColorInterface, mediaInterface, textColorInterface } from 'utils/types';
import { getBackground } from 'utils/background';
import { getTextColor } from 'utils/color';
import useStyles from '@styles/sections/invitation';

interface Invitation {
  data: {
    title: string;
    description: string;
    image: mediaInterface;
    backgroundColor: backgroundColorInterface;
    textColor: textColorInterface;
    mobileBackgroundColor: backgroundColorInterface;
  };
}

const InvitationSection: React.FC<Invitation> = ({ data }: Invitation) => {
  const classes = useStyles({
    ...getBackground(data.backgroundColor),
    ...getTextColor(data.textColor),
  });
  return (
    <div className={classes.invitationSection}>
      <div className={classes.invitationAligner}>
        <img src="line.svg" alt="Center" />
        <img src="Logo-2.svg" alt="GO TO SHAiRE" />
      </div>
      <br />
      <div>
        {data.image?.url && <Image className={classes.invitationBanner} media={data.image} />}
      </div>
      <div className={classes.invitationTitle}>{data.title}</div>
      <div
        className={classes.invitationDescription}
        dangerouslySetInnerHTML={{ __html: data.description }}
      ></div>
    </div>
  );
};

export default InvitationSection;
