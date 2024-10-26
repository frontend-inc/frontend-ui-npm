import React from 'react';
import { FeaturedProps } from '../../components/web/featured/Featured';
import { SectionProps, HeadingProps } from '../../types';
type UIFeaturedProps = SectionProps & HeadingProps & FeaturedProps;
declare const UIFeatured: React.FC<UIFeaturedProps>;
export default UIFeatured;
