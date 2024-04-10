import React from 'react';
import { FeaturesProps } from '../../components/web/features/Features';
import { SectionProps, HeadingProps } from '../../types';
type WebFeaturesProps = SectionProps & HeadingProps & FeaturesProps;
declare const WebFeatures: React.FC<WebFeaturesProps>;
export default WebFeatures;
