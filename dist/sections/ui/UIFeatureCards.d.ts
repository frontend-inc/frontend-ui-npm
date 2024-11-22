import React from 'react';
import { FeatureCardsProps } from '../../components/web/featured/FeatureCards';
import { SectionProps, StackProps, HeadingProps } from '../../types';
type UIFeatureCardsProps = SectionProps & HeadingProps & StackProps & FeatureCardsProps;
declare const UIFeatureCards: React.FC<UIFeatureCardsProps>;
export default UIFeatureCards;
