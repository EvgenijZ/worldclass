import tab_style from '../styles/tab.module.scss';
import React, { useState } from 'react';

const Tab = ({ children, boxed, centered, margin }) => {
	const [activeTab, setActiveTab] = useState(0);

	if (children.props && children.props.children.length <= 2) {
		console.error('In the <Tab/> component, must be at least two elements!');
		return null;
	}

	let tabHead = children.map((child) => child.props.children[0]);
	let tabBody = children.map((child) => child.props.children[1]);

	const prepareTabStyles = () => {
		let styles = `${tab_style.tab}`;

		if (boxed) styles += ` ${tab_style['tab--boxed']}`;
		if (centered) styles += ` ${tab_style['tab--centered']}`;
		if (margin) styles += ` ${tab_style['tab--margin']}`;

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
