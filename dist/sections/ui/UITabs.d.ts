import React from 'react';
import { TabsProps } from '../../components/web/tabs/Tabs';
import { SectionProps, HeadingProps } from '../../types';
type UITabsProps = SectionProps & HeadingProps & TabsProps;
declare const UITabs: React.FC<UITabsProps>;
export default UITabs;
