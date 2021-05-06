import React, { useEffect, useState } from 'react';
import { WithUserAgentProps } from 'next-useragent';

import Header from './elements/header';
import Footer from './elements/footer';
import {
  linkInterface,
  mediaInterface,
  menuInterface,
  backgroundColorInterface,
} from 'utils/types';
import { getBackground } from 'utils/background';
import useStyles from '@styles/layout';
interface LayoutProps extends WithUserAgentProps {
  children: React.ReactNode;
  global: {
    header: {
      logo: mediaInterface;
    };
    menu: menuInterface;
    footer: {
      logo: mediaInterface;
      links?: Array<linkInterface>;
      button: linkInterface;
      extraText: string;
    };
    backgroundColor: backgroundColorInterface;
  };
}

const Layout: React.FC<LayoutProps> = ({ children, global, ua }: LayoutProps) => {
  const [isSupportedBrowser, setIsSupportedBrowser] = useState(true);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const { header, footer, menu, backgroundColor } = global;
  const classes = useStyles({
    ...getBackground(backgroundColor),
  });

  useEffect(() => {
    if (!['Firefox', 'Edge', 'Chrome', 'Safari', 'Mobile Safari'].includes(ua?.browser as string)) {
      setIsSupportedBrowser(false);
    }
    if (ua?.isIos) {
      setIsIos(true);
    }
    if (ua?.isAndroid) {
      setIsAndroid(true);
    }
  });

  return (
    <>
      <div className={classes.layoutContainer}>
        {header && <Header header={header} />}
        <div>{children}</div>
      </div>
      {isSupportedBrowser && (footer || menu) && (
        <Footer footer={footer} menu={menu} isIos={isIos} isAndroid={isAndroid} />
      )}
    </>
  );
};

export default Layout;
