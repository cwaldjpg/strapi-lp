import React from 'react';
import Link from 'next/link';

import Image from './image';
import CustomLink from './custom-link';
import { linkInterface, mediaInterface, menuInterface } from 'utils/types';
import useStyles from '@styles/layout';
interface FooterProps {
  footer: {
    logo: mediaInterface;
    android?: linkInterface;
    apple?: linkInterface;
  };
  menu: menuInterface;
  isIos?: boolean;
  isAndroid?: boolean;
}

const Footer: React.FC<FooterProps> = ({ footer, menu, isIos, isAndroid }: FooterProps) => {
  const { logo, android, apple } = footer || {};
  const { links = [] } = menu || {};
  const classes = useStyles();
  return (
    <div>
      <div className={classes.layoutFooter}>
        <Link href="/[[...slug]]" as="/">
          <a>
            <Image media={logo} />
          </a>
        </Link>
        <div className={classes.footerAppLink}>
          {apple && !isAndroid && (
            <CustomLink link={apple} className="app-links-content">
              <img src="ios.svg" alt="ios" />
            </CustomLink>
          )}
          {android && !isIos && (
            <CustomLink link={android} className="app-links-content">
              <img src="android.svg" alt="android" />
            </CustomLink>
          )}
        </div>
      </div>
      <div className={classes.layoutFooterNav}>
        <div>
          {links.map((link) => (
            <div key={link.id}>
              <CustomLink link={link}>{link.text}</CustomLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
