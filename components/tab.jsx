import tab_style from '../styles/tab.module.scss';
import React, { useState } from 'react';

const Tab = ({ children, boxed, centered }) => {
  if (children.props.children.length <= 2) {
    console.error('In the <Tab/> component, must be at least two elements!');
    return null;
  } else {
    const checkDefaultActiveTab = children => {
      let activeIndex = 0;

      children.forEach((item, index) => {
        if (item.props.active) activeIndex = index;
      });

      return activeIndex;
    };

    const [activeTab, setActiveTab] = useState(checkDefaultActiveTab(children));

    const tabHead = children.map(child =>
      child.props.children.filter(child => child.type.name == 'TabHead')
    );
    const tabBody = children.map(child =>
      child.props.children.filter(child => child.type.name == 'TabBody')
    );

    const prepareTabStyles = () => {
      let styles = `${tab_style.tab}`;

      if (boxed) styles += ` ${tab_style['tab--boxed']}`;
      if (centered) styles += ` ${tab_style['tab--centered']}`;

      return styles;
    };

    return (
      <>
        <div className={prepareTabStyles()}>
          <div className={tab_style.tab__head}>
            {tabHead.map((item, index) => {
              return (
                <TabHead key={index}>
                  <div
                    className={
                      activeTab == index
                        ? `${tab_style.tab__title} ${tab_style.tab__active}`
                        : tab_style.tab__title
                    }
                    onClick={() => setActiveTab(index)}
                  >
                    {item}
                  </div>
                </TabHead>
              );
            })}
          </div>
          <div className={tab_style.tab__body}>
            {tabBody.map((item, index) => {
              return (
                <TabBody key={index}>
                  <div
                    className={
                      activeTab == index
                        ? `${tab_style.tab__item} ${tab_style['tab__item--active']}`
                        : tab_style.tab__item
                    }
                  >
                    {item}
                  </div>
                </TabBody>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export const TabItem = ({ children }) => {
  return children;
};

export const TabHead = ({ children }) => {
  return children;
};

export const TabBody = ({ children }) => {
  return children;
};

export default Tab;
