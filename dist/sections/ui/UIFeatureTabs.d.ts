import React from 'react';
import { FeatureTabsProps } from '../../components/web/feature-tabs/FeatureTabs';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type UIFeatureTabsProps = SectionProps & HeadingProps & StackProps & FeatureTabsProps;
declare const UIFeatureTabs: React.FC<UIFeatureTabsProps>;
export default UIFeatureTabs;
