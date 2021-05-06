import React from 'react';
import { Tabs, Tab, Fade } from '@material-ui/core';
import _ from 'lodash';

import Image from '@components/elements/image';
import { mediaInterface, textColorInterface } from 'utils/types';
import useStyles from '@styles/sections/tutorial';
import { getTextColor } from 'utils/color';

interface TutorialProps {
  data: {
    title: string;
    tutorialElements: {
      id: string | number;
      title: string;
      description: string;
      illustration: mediaInterface;
      icon: mediaInterface;
      tabNumber: number;
    }[];
    tutorialTab: {
      id: string | number;
      tabNumber: number;
      title: string;
    }[];
    textColor: textColorInterface;
  };
}

const TutorialSection: React.FC<TutorialProps> = ({ data }: TutorialProps) => {
  const classes = useStyles({
    ...getTextColor(data.textColor),
  });
  const { tutorialElements = [], tutorialTab = [] } = data;
  const [value, setValue] = React.useState(tutorialTab[0]?.tabNumber);

  const handleChange = (event: any, newTabId: number) => {
    setValue(newTabId);
  };
  const renderTabBar = () => {
    if (tutorialTab.length === 0) return null;
    return (
      <Tabs
        value={value}
        centered
        onChange={handleChange}
        classes={{
          root: classes.tabBarRoot,
          scroller: classes.tabBarSroller,
          flexContainer: classes.tabBarContainer,
          indicator: classes.tabBarIndicator,
        }}
      >
        {tutorialTab.map(({ id, tabNumber, title }) => (
          <Tab
            key={id}
            value={tabNumber}
            label={title}
            wrapped
            classes={{
              root: classes.tabButtonRoot,
              selected: classes.tabButtonSelected,
            }}
          />
        ))}
      </Tabs>
    );
  };
  const renderTabContent = () => {
    if (tutorialTab.length === 0) {
      return tutorialElements.map((element, index) => renderContent(element, index));
    }
    const tutorialContent = _.filter(tutorialElements, (o) => o.tabNumber === value);
    return tutorialContent.map(
      (element, index) =>
        element.tabNumber === value && (
          <Fade key={index} in={element.tabNumber === value}>
            {renderContent(element, index)}
          </Fade>
        ),
    );
  };

  const renderContent = (content: any, index: number) => (
    <div className={classes.tutorialStep}>
      <div className={`${classes.contentSide} ${index % 2 && classes.contentSideReverse}`}>
        <div className="step-content">
          <Image media={content.icon} className="step-logo" />
          <div className="step-title">{content.title}</div>
          <div className="step-description">{content.description}</div>
        </div>
        {index % 2 ? (
          <img className="step-arrow" src="Right-Arrow.svg" alt="left" />
        ) : (
          <img className="step-arrow" src="Left-Arrow.svg" alt="right" />
        )}
      </div>
      <div className={`${classes.phoneSide} ${index % 2 && classes.phoneSideReverse}`}>
        <Image media={content.illustration} />
      </div>
    </div>
  );

  return (
    <div className={classes.tutorialSection}>
      <div className={classes.tutorialTitle}>{data.title}</div>
      {renderTabBar()}
      {renderTabContent()}
    </div>
  );
};

export default TutorialSection;
