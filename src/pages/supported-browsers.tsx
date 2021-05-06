import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import useStyles from '@styles/supported-browsers';
import { WithUserAgentProps, withUserAgent } from 'next-useragent';

const SupportedBrowers: React.FC<WithUserAgentProps> = ({ ua }: WithUserAgentProps) => {
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    if (['Firefox', 'Edge', 'Chrome', 'Safari', 'Mobile Safari'].includes(ua?.browser as string)) {
      router.push('/');
    }
  }, []);

  return (
    <div className={classes.supportedContainer}>
      <div className={classes.title}>お使いのブラウザは現在サポートされていません。</div>
      <div className={classes.subTitle}>
        <div>お使いのブラウザが対応していない可能性があります。</div>
        <div>以下のブラウザで再度アクセスしてください。</div>
      </div>
      <div className={classes.supportedBrowsers}>
        <div className={classes.browserLink}>
          <img className={classes.browserLogo} src="/chrome.svg" alt="Chrome" />
          <div className={classes.browserName}>Chrome</div>
          <a href="https://www.google.com/chrome/">最新版</a>
        </div>
        <div className={classes.browserLink}>
          <img className={classes.browserLogo} src="/firefox.svg" alt="Firefox" />
          <div className={classes.browserName}>Firefox</div>
          <a href="https://www.mozilla.org/en-US/firefox/new/">最新版</a>
        </div>
        <div className={classes.browserLink}>
          <img className={classes.browserLogo} src="/safari.svg" alt="Safari" />
          <div className={classes.browserName}>Safari</div>
          <a href="https://support.apple.com/downloads/safari/">最新版</a>
        </div>
        <div className={classes.browserLink}>
          <img className={classes.browserLogo} src="/edge.svg" alt="Microsoft Edge" />
          <div className={classes.browserName}>Edge</div>
          <a href="https://www.microsoft.com/en-us/edge">最新版</a>
        </div>
      </div>
    </div>
  );
};

export default withUserAgent(SupportedBrowers);
