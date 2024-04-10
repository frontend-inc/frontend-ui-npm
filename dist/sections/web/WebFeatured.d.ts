import React from 'react';
import { FeaturedProps } from '../../components/web/featured/Featured';
import { SectionProps, HeadingProps } from '../../types';
type WebFeaturedProps = SectionProps & HeadingProps & FeaturedProps;
declare const WebFeatured: React.FC<WebFeaturedProps>;
export default WebFeatured;
