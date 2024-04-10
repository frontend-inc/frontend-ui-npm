import React from 'react';
import { TabsProps } from '../../components/web/tabs/Tabs';
import { SectionProps, HeadingProps } from '../../types';
type WebTabsProps = SectionProps & HeadingProps & TabsProps;
declare const WebTabs: React.FC<WebTabsProps>;
export default WebTabs;
