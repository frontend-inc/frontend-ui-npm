import React from 'react';
import { FeaturesProps } from '../../components/web/features/Features';
import { SectionProps, HeadingProps } from '../../types';
type UIFeaturesProps = SectionProps & HeadingProps & FeaturesProps;
declare const UIFeatures: React.FC<UIFeaturesProps>;
export default UIFeatures;
