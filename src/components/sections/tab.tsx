import React, { useEffect } from 'react';
import { Tabs, Tab, Fade } from '@material-ui/core';
import { useRouter } from 'next/router';
import _ from 'lodash';

import useStyles from '@styles/sections/tab';
interface CustomTabProps {
  data: {
    verticalTab: boolean;
    title: string;
    tabs: {
      id: string | number;
      tabId: string;
      title: string;
      content: string;
      description: string;
    }[];
  };
}

const CustomTab: React.FC<CustomTabProps> = ({ data }: CustomTabProps) => {
  const { tabs = [], title } = data;
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    const query = router.asPath.split('?')[1]?.split('=');
    // Query key must be 'user' and value should be includes in tabs
    if (
      query === undefined ||
      query[0] !== 'user' ||
      _.findIndex(tabs, (o) => o.tabId === query[1]) === -1
    ) {
      router.push(`/[[...slug]]?user=${tabs[0]?.tabId}`, `/terms-service?user=${tabs[0]?.tabId}`, {
        shallow: true,
      });
    }
  }, []);

  const handleChange = (event: any, id: string) => {
    router.push(`/[[...slug]]?user=${id}`, `/terms-service?user=${id}`, {
      shallow: true,
    });
  };

  const classes = useStyles();

  return (
    <div>
      <div className={classes.title}>{title}</div>
      <Tabs
        value={query.user}
        onChange={handleChange}
        centered
        classes={{ indicator: classes.tabBarIndicator }}
      >
        {tabs.map(({ id, tabId, title }) => (
          <Tab
            key={id}
            value={tabId}
            label={title}
            disableRipple
            wrapped
            classes={{
              root: classes.tabButtonRoot,
              selected: classes.tabButtonSelected,
            }}
          />
        ))}
        <div className={classes.bottomLine}></div>
      </Tabs>
      {tabs.map(
        ({ id, tabId, content, description }) =>
          query.user === tabId && (
            <Fade in={query.user === tabId} key={id}>
              <div>
                <div className={classes.tabDescription}>{description}</div>
                {content && (
                  <div
                    className={classes.tabContent}
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                )}
              </div>
            </Fade>
          ),
      )}
    </div>
  );
};

export default CustomTab;
