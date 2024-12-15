import React from 'react';
import { FeatureItemProps } from '../../components/web/feature-item/FeatureItem';
import { SectionProps, StackProps } from '../../types';
type UIFeatureItemProps = SectionProps & StackProps & FeatureItemProps;
declare const UIFeatureItem: React.FC<UIFeatureItemProps>;
export default UIFeatureItem;
