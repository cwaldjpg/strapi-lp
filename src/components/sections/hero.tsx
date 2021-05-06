import React, { useState, useEffect } from 'react';
import { WithUserAgentProps } from 'next-useragent';

import CustomLink from '../elements/custom-link';
import { getStrapiMedia } from 'utils/media';
import {
  linkInterface,
  mediaInterface,
  backgroundColorInterface,
  textColorInterface,
} from 'utils/types';
import { getBackground } from 'utils/background';
import { getTextColor } from 'utils/color';
import useStyles from '@styles/sections/hero';

interface HeroProps extends WithUserAgentProps {
  data: {
    backgroundImage: mediaInterface;
    mobileBackgroundImage: mediaInterface;
    title?: string;
    subtitle?: string;
    slogan: string;
    description: string;
    apple: linkInterface;
    android: linkInterface;
    backgroundColor: backgroundColorInterface;
    textColor: textColorInterface;
  };
}

const HeroSection: React.FC<HeroProps> = ({ data, ua }: HeroProps) => {
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIos, setIsIos] = useState(false);
  useEffect(() => {
    if (android && !ua?.isIos) {
      setIsAndroid(true);
    }
    if (apple && !ua?.isAndroid) {
      setIsIos(true);
    }
  }, [ua]);
  const { apple, android } = data;
  const classes = useStyles({
    ...getBackground(data.backgroundColor),
    ...getTextColor(data.textColor),
    backgroundImage: data.backgroundImage?.url
      ? `url(${getStrapiMedia(data.backgroundImage.url)})`
      : 'none',
    mobileBackgroundImage: data.mobileBackgroundImage?.url
      ? `url(${getStrapiMedia(data.mobileBackgroundImage.url)})`
      : 'none',
  });
  return (
    <div>
      <div className={classes.bannerSection}>
        <div className={classes.bannerTitle}>
          <div className={classes.bannerText}>{data.title}</div>
          <div className={classes.appLinks}>
            {isIos && (
              <CustomLink link={apple} className={classes.appLinksContent}>
                <img src="ios.svg" alt="ios" />
              </CustomLink>
            )}
            {isAndroid && (
              <CustomLink link={android} className={classes.appLinksContent}>
                <img src="android.svg" alt="android" />
              </CustomLink>
            )}
          </div>
        </div>
      </div>
      <div className={classes.descriptionSection}>
        <div className={classes.bannerSubTitle}>{data.subtitle}</div>
        <div className={classes.bannerDescription}>{data.description}</div>
      </div>
    </div>
  );
};

export default HeroSection;
