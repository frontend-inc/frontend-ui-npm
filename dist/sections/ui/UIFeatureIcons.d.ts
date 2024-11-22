import React from 'react';
import { FeatureIconsProps } from '../../components/web/features/FeatureIcons';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type UIFeatureIconsProps = SectionProps & HeadingProps & StackProps & FeatureIconsProps;
declare const UIFeatureIcons: React.FC<UIFeatureIconsProps>;
export default UIFeatureIcons;
